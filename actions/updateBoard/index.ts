"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateBoard } from "./updateBoardSchema";
import { InputType, OutputType } from "./updateBoardTypes";

async function performAction (data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  const { title, id } = data;

  let board;

  try {
    board = await database.board.update({
      where: {
        id,
        orgId,
      },
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      error: 'Failed to update board.'
    }
  }

  revalidatePath(`/board/${id}`);

  // Return the updated board
  return {
    data: board
  };
}

export const updateBoard = createServerAction(UpdateBoard, performAction);