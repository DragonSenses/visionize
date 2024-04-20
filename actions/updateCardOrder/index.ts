"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateCardOrder } from "./updateCardOrderSchema";
import { InputType, OutputType } from "./updateCardOrderTypes";

async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  const { 
    boardId,
    listId, 
    items, 
  } = data;

  // Revalidate the cache for the updated board path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  return {
    // ...
  };
}

export const updateCardOrder = createServerAction(UpdateCardOrder, performAction);