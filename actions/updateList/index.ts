"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateList } from "./updateListSchema";
import { InputType, OutputType } from "./updateListTypes";

async function performAction (data: InputType): Promise<OutputType> {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  const { title, id } = data;

  let list;

  try {
    list = await database.list.update({
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
      error: 'Failed to update list.'
    }
  }

  revalidatePath(`/list/${id}`);

  // Return the updated list
  return {
    data: list
  };
}

export const updateList = createServerAction(UpdateList, performAction);