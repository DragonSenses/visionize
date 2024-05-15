"use server";

import { auth } from "@clerk/nextjs"; // Authentication module
import { revalidatePath } from "next/cache"; // Cache revalidation module

import { createServerAction } from "@/lib/createServerAction"; // Server action creator
import { database } from "@/lib/database"; // Database interface

import { DeleteCard } from "./deleteCardSchema"; // Input validation schema
import { InputType, OutputType } from "./deleteCardTypes"; // Type definitions

/**
 * Defines a server action to delete a card.
 *
 * @param {InputType} data - An object containing the data needed to delete the card.
 * @returns {Promise<OutputType>} - The deleted card or an error message.
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
  
  const { id, boardId } = data;

  let card;

  // Revalidate the cache for the updated board path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  // Return the deleted card
  return {
    data: card,
  };
}

// Export the server action for external use
export const deleteCard = createServerAction(DeleteCard, performAction);
