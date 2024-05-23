"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";
import { createAuditLog } from "@/lib/createAuditLog";

import { CreateCard } from "./createCardSchema";
import { InputType, OutputType } from "./createCardTypes";

async function performAction(data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, boardId, listId } = data;

  let card;

  try {
    // Fetch list to create the card in
    const list = await database.list.findUnique({
      where: {
        id: listId,
        board: {
          orgId,
        },
      },
    });

    if (!list) {
      return {
        error: "List not found",
      };
    }

    // Fetch the most recent card in the list to properly assign the newest order to the card
    const mostRecentCard = await database.card.findFirst({
      where: { listId: listId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    // Get the next order depending on whether a mostRecentCard is present or not
    const nextOrder = mostRecentCard ? mostRecentCard.order + 1 : 1;

    // Create the card in the database
    card = await database.card.create({
      data: {
        title,
        listId,
        order: nextOrder,
      },
    });

    await createAuditLog({
      entityId: card.id,
      entityTitle: card.title,
      entityType: ENTITY_TYPE.CARD,
      action: ACTION.CREATE,
    });
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
