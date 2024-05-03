"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateCard } from "./updateCardSchema";
import { InputType, OutputType } from "./updateCardTypes";

async function performAction (data: InputType): Promise<OutputType> {
  // Return the updated card
  return {
    data: board
  };
}

export const updateCard = createServerAction(UpdateCard, performAction);