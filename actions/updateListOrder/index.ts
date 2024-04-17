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

  return {
    data: list
  };
}

export const updateListOrder = createServerAction(UpdateListOrder, performAction);