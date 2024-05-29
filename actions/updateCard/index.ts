"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateCard } from "./updateCardSchema";
import { InputType, OutputType } from "./updateCardTypes";

async function performAction(data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id, boardId, ...values } = data;

  let card;

  try {
    card = await database.card.update({
      where: {
        id,
        list: {
          board: {
            orgId,
          },
        },
      },
      data: {
        ...values,
      },
    });
  } catch (error) {
    return {
      error: "Failed to update card.",
    };
  }

  // Revalidate the cache for the updated board path
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  // Return the updated card
  return {
    data: card,
  };
}

export const updateCard = createServerAction(UpdateCard, performAction);
