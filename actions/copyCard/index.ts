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

  try {
    // Find the original card to duplicate
    const sourceCard = await database.card.findUnique({
      where: {
        id,
        list: {
          board: {
            orgId,
          },
        },
      },
    });

    // Return an error message if the original card is not found
    if (!sourceCard) {
      return { error: "Card not found." };
    }

    // Fetch the most recent card in the list to properly assign the newest order
    const mostRecentCard = await database.card.findFirst({
      where: { listId: sourceCard.listId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    // Get the next order depending on whether the mostRecentCard is present or not
    const nextOrder = mostRecentCard ? mostRecentCard.order + 1 : 1;

    // Create a new card by deep copying the source card
    card = await database.card.create({
      data: {
        title: `${sourceCard.title} - Copy`,
        description: sourceCard.description,
        order: nextOrder,
        listId: sourceCard.listId,
      },
    });
  } catch (error) {
    return {
      error: "Failed to copy.",
    };
  }

  // Revalidate the cache for the updated board path
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  // Return the copied card
  return {
    data: card,
  };
}

// Export the server action for external use
export const copyCard = createServerAction(CopyCard, performAction);
