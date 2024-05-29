"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";
import { createAuditLog } from "@/lib/createAuditLog";

import { UpdateBoard } from "./updateBoardSchema";
import { InputType, OutputType } from "./updateBoardTypes";

async function performAction(data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
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

    await createAuditLog({
      entityId: board.id,
      entityTitle: board.title,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.UPDATE,
    });
  } catch (error) {
    return {
      error: "Failed to update board.",
    };
  }

  revalidatePath(`/board/${id}`);

  // Return the updated board
  return {
    data: board,
  };
}

export const updateBoard = createServerAction(UpdateBoard, performAction);
