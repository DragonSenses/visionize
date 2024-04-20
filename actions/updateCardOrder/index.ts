"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateCardOrder } from "./updateCardOrderSchema";
import { InputType, OutputType } from "./updateCardOrderTypes";

async function performAction (data: InputType): Promise<OutputType> {
  // ...
}

export const updateCardOrder = createServerAction(UpdateCardOrder, performAction);