"use server";

import { auth } from "@clerk/nextjs/server"; // Authentication module
import { revalidatePath } from "next/cache"; // Cache revalidation module
import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { createServerAction } from "@/lib/createServerAction"; // Server action creator
import { database } from "@/lib/database"; // Database interface
import { createAuditLog } from "@/lib/createAuditLog";

import { CopyList } from "./copyListSchema"; // Input validation schema
import { InputType, OutputType } from "./copyListTypes"; // Type definitions

/**
 * Defines a server action to copy a list.
 *
 * @param {InputType} data - An object containing the data needed to copy the list.
 * @returns {Promise<OutputType>} - The copied list or an error message.
 */
async function performAction(data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  // Destructure the necessary data from the input
  const { id, boardId } = data;

  // Declare a variable to store the copied list
  let list;

  try {
    // Find the list to copy
    const foundList = await database.list.findUnique({
      where: {
        id,
        boardId,
        board: {
          orgId,
        },
      },
      include: {
        cards: true,
      },
    });

    // Return an error message if the list to copy is not found
    if (!foundList) {
      return { error: "List not found." };
    }

    // Fetch the most recent list in the board to properly assign the newest order to the list
    const mostRecentList = await database.list.findFirst({
      where: { boardId: boardId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    // Get the next order depending on whether a mostRecentList is present or not
    const nextOrder = mostRecentList ? mostRecentList.order + 1 : 1;

    // Create a new copy of the list in the database
    list = await database.list.create({
      data: {
        boardId: foundList.boardId,
        title: `${foundList.title} - Copy`,
        order: nextOrder,
        cards: {
          createMany: {
            data: foundList.cards.map((card) => ({
              title: card.title,
              description: card.description,
              order: card.order,
            })),
          },
        },
      },
      include: {
        cards: true,
      },
    });

    await createAuditLog({
      entityId: list.id,
      entityTitle: list.title,
      entityType: ENTITY_TYPE.LIST,
      action: ACTION.CREATE,
    });
  } catch (error) {
    // If the copy fails, return an error
    return {
      error: "Failed to copy list.",
    };
  }

  // Revalidate the cache for the board path where list was copied to
  // to ensure immediate UI consistency post-copy
  revalidatePath(`/board/${boardId}`);

  // Return the copied list
  return {
    data: list,
  };
}

// Export the server action for external use
export const copyList = createServerAction(CopyList, performAction);
