"use server";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";
import { createAuditLog } from "@/lib/createAuditLog";

import { CreateList } from "./createListSchema";
import { InputType, OutputType } from "./createListTypes";

async function performAction(data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, boardId } = data;

  let list;

  try {
    // Fetch the board
    const board = await database.board.findUnique({
      where: {
        id: boardId,
        orgId,
      },
    });

    if (!board) {
      return {
        error: "Board not found",
      };
    }

    // Fetch the most recent list in the board to properly assign the newest order to the list
    const mostRecentList = await database.list.findFirst({
      where: { boardId: boardId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    // Get the next order depending on whether a mostRecentList is present or not
    const nextOrder = mostRecentList ? mostRecentList.order + 1 : 1;

    // Create the list in the database
    list = await database.list.create({
      data: {
        title,
        boardId,
        order: nextOrder,
      },
    });

    await createAuditLog({
      entityId: list.id,
      entityTitle: list.title,
      entityType: ENTITY_TYPE.LIST,
      action: ACTION.CREATE,
    });
  } catch (error) {
    return {
      error: "Failed to create list.",
    };
  }

  revalidatePath(`/board/${boardId}`);

  // Return the list
  return {
    data: list,
  };
}

export const createList = createServerAction(CreateList, performAction);
