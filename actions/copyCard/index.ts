"use server";

import { auth } from "@clerk/nextjs"; // Authentication module
import { revalidatePath } from "next/cache"; // Cache revalidation module

import { createServerAction } from "@/lib/createServerAction"; // Server action creator
import { database } from "@/lib/database"; // Database interface

import { CopyCard } from "./copyCardSchema"; // Input validation schema
import { InputType, OutputType } from "./copyCardTypes"; // Type definitions

/**
 * Defines a server action to copy a card.
 *
 * @param {InputType} data - An object containing the data needed to copy the card.
 * @returns {Promise<OutputType>} - The copied card or an error message.
 */
async function performAction(data: InputType): Promise<OutputType> {
  let card;
  // Return the copied card
  return {
    data: card,
  };
}

// Export the server action for external use
export const copyCard = createServerAction(CopyCard, performAction);
