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

    // Construct a transaction array for updating list order
    const transaction = items.map((list) => database.list.update({
        where: {
          id: list.id,
          board: {
            orgId,
          },
        },
        data: {
          order: list.order,
        },
      })
    );

    // Execute the transaction
    lists = await database.$transaction(transaction);
  } catch (error) {
    return {
      error: 'Failed to update list order.'
    }
  }

  // Revalidate the cache for the updated board path 
  // to ensure immediate UI consistency post-update
  revalidatePath(`/board/${boardId}`);

  // Return the updated list data
  return {
    data: lists
  };
}

export const updateListOrder = createServerAction(UpdateListOrder, performAction);