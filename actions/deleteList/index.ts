// Enforce server-side execution context for security and performance
"use server";

import { createServerAction } from "@/lib/createServerAction"; // Server action creator

import { DeleteList } from "./deleteListSchema"; // Input validation schema
import { InputType, OutputType } from "./deleteListTypes"; // Type definitions

/**
 * Defines the server action to delete a list.
 * @param data an object that contains the data needed to delete the list
 * @returns the deleted list
 */
async function performAction (data: InputType): Promise<OutputType> {
  let list;

  // Return the deleted list
  return {
    data: list
  };
}

// Export the server action for external use
export const deleteList = createServerAction(DeleteList, performAction);