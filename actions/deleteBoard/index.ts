"use server";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";
import { createAuditLog } from "@/lib/createAuditLog";

import { DeleteBoard } from "./deleteBoardSchema";
import { InputType, OutputType } from "./deleteBoardTypes";
import { decreaseAvailableBoardCount } from "@/lib/orgLimit";

async function performAction(data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { id } = data;

  let board;

  try {
    board = await database.board.delete({
      where: {
        id,
        orgId,
      },
    });

    await decreaseAvailableBoardCount();

    await createAuditLog({
      entityId: board.id,
      entityTitle: board.title,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.DELETE,
    });
  } catch (error) {
    return {
      error: "Failed to delete board.",
    };
  }

  const path = `/organization/${orgId}`;
  revalidatePath(path);
  redirect(path);
}

export const deleteBoard = createServerAction(DeleteBoard, performAction);
