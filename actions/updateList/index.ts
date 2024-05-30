// Enforce server-side execution context for security and performance
"use server";

import { auth } from "@clerk/nextjs"; // Authentication module
import { revalidatePath } from "next/cache"; // Cache revalidation module
import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { createServerAction } from "@/lib/createServerAction"; // Server action creator
import { database } from "@/lib/database"; // Database interface
import { createAuditLog } from "@/lib/createAuditLog";

import { UpdateList } from "./updateListSchema"; // Input validation schema
import { InputType, OutputType } from "./updateListTypes"; // Type definitions

/**
 * Defines the server action to update a list.
 * @param data an object that contains the data needed to update the list
 * @returns the updated list
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
  const { title, id, boardId } = data;

  // Declare a variable to store the updated list
  let list;

  try {
    // Attempt to update the list in the database
    list = await database.list.update({
      where: {
        id,
        boardId,
        board: {
          // Organization ID for additional security check
          orgId,
        },
      },
      data: {
        title,
      },
    });

    await createAuditLog({
      entityId: list.id,
      entityTitle: list.title,
      entityType: ENTITY_TYPE.LIST,
      action: ACTION.UPDATE,
    });
  } catch (error) {
    // If the update fails, return an error
    return {
      error: "Failed to update list.",
    };
  }

  // Revalidate the cache for the updated board path
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  // Return the updated list
  return {
    data: list,
  };
}

// Export the server action for external use
export const updateList = createServerAction(UpdateList, performAction);
