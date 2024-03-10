"use server";

import { createServerAction } from "@/lib/createServerAction";

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

  // Return the updated board
  return { };
}

export const updateBoard = createServerAction(UpdateBoard, performAction);