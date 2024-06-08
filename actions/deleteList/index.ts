// Enforce server-side execution context for security and performance
"use server";

import { auth } from "@clerk/nextjs/server"; // Authentication module
import { revalidatePath } from "next/cache"; // Cache revalidation module
import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { createServerAction } from "@/lib/createServerAction"; // Server action creator
import { database } from "@/lib/database"; // Database interface
import { createAuditLog } from "@/lib/createAuditLog";

import { DeleteList } from "./deleteListSchema"; // Input validation schema
import { InputType, OutputType } from "./deleteListTypes"; // Type definitions

/**
 * Defines the server action to delete a list.
 * @param data an object that contains the data needed to delete the list
 * @returns the deleted list
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

  // Declare a variable to store the deleted list
  let list;

  // Attempt to delete the list in the database using Prisma ORM
  try {
    list = await database.list.delete({
      where: {
        id,
        boardId,
        board: {
          // Organization ID for additional security check
          orgId,
        },
      },
    });

    await createAuditLog({
      entityId: list.id,
      entityTitle: list.title,
      entityType: ENTITY_TYPE.LIST,
      action: ACTION.DELETE,
    });
  } catch (error) {
    // If the delete fails, return an error
    return {
      error: "Failed to delete list.",
    };
  }

  // Revalidate the cache for the deleted board path
  // to ensure immediate UI consistency post-delete
  revalidatePath(`/board/${boardId}`);

  // Return the deleted list
  return {
    data: list,
  };
}

// Export the server action for external use
export const deleteList = createServerAction(DeleteList, performAction);
