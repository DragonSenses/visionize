"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { CopyList } from "./copyListSchema";
import { InputType, OutputType } from "./copyListTypes";

/**
 * Defines a server action to copy a list.
 *
 * @param {InputType} data - An object containing the data needed to copy the list.
 * @returns {Promise<OutputType>} - The copied list or an error message.
 */
async function performAction (data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  const { 
    id,
    boardId,
  } = data;

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

    if (!foundList) {
      return { error: 'List not found.' };
    }

    // Fetch the most recent list in the board to properly assign the newest order to the list
    const mostRecentList = await database.list.findFirst({
      where: { boardId: boardId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    // Get the next order depending on whether a mostRecentList is present or not
    const nextOrder = mostRecentList ? mostRecentList.order + 1 : 1;


  } catch (error) {
    return {
      error: 'Failed to copy list.'
    }
  }

  revalidatePath(`/board/${boardId}`);

  return {
    data: list
  };
}

export const copyList = createServerAction(CopyList, performAction);