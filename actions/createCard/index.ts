"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { CreateCard } from "./createCardSchema";
import { InputType, OutputType } from "./createCardTypes";

async function performAction(data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, boardId, listId, } = data;

  let card;

  try {

  } catch (error) {
    return {
      error: "Failed to create card.",
    };
  }

  revalidatePath(`/board/${boardId}`);

  // Return the card
  return {
    data: card,
  };
}

export const createCard = createServerAction(CreateCard, performAction);
