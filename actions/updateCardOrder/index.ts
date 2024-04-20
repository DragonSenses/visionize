"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateCardOrder } from "./updateCardOrderSchema";
import { InputType, OutputType } from "./updateCardOrderTypes";

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
  const { boardId, listId, items } = data;

  let cards;

  try {
    // Construct a transaction array for updating card order
    const transaction = items.map((card) =>
      database.card.update({
        where: {
          id: card.id,
          list: {
            board: {
              orgId,
            },
          },
        },
        data: {
          order: card.order,
          listId: card.listId,
        },
      })
    );

    // Execute the transaction
    cards = await database.$transaction(transaction);
  } catch (error) {
    return {
      error: "Failed to update card order.",
    };
  }

  // Revalidate the cache for the updated board path
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  return {
    data: cards,
  };
}

export const updateCardOrder = createServerAction(
  UpdateCardOrder,
  performAction
);
