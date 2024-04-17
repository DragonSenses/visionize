"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateListOrder } from "./updateListOrderSchema";
import { InputType, OutputType } from "./updateListOrderTypes";

async function performAction (data: InputType): Promise<OutputType> {
  // Authenticate the user and get their organization ID
  const { userId, orgId } = auth();

  // If authentication fails, return an error
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  // Destructure the necessary data from the input
  const { 
    boardId,
    items,
  } = data;

  let lists;

  try {
    // Update the list order in the database
    // Execute a series of updates
  } catch (error) {
    return {
      error: 'Failed to update list order.'
    }
  }

  return {
    data: lists
  };
}

export const updateListOrder = createServerAction(UpdateListOrder, performAction);