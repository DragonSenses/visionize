"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { CopyList } from "./copyListSchema";
import { InputType, OutputType } from "./copyListTypes";

/**
 * Defines a server action to copy a list.
 *
 * @param {InputType} data - An object containing the data needed to copy the list.
 * @returns {Promise<OutputType>} - The copied list or an error message.
 */
async function performAction (data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  const { 
    id,
    boardId,
  } = data;

  let list;

  try {
    list = await database.list.copy({
      where: {
        id,
        boardId,
        board: {
          orgId, 
        },
      },
    });
  } catch (error) {
    return {
      error: 'Failed to copy list.'
    }
  }

  revalidatePath(`/board/${boardId}`);

  return {
    data: list
  };
}

export const copyList = createServerAction(CopyList, performAction);