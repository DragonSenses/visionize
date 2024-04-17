"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateListOrder } from "./updateListOrderSchema";
import { InputType, OutputType } from "./updateListOrderTypes";

async function performAction (data: InputType): Promise<OutputType> {

  // Return the updated list
  return {
    data: list
  };
}

export const updateListOrder = createServerAction(UpdateListOrder, performAction);