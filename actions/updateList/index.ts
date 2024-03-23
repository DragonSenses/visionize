"use server";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { createServerAction } from "@/lib/createServerAction";
import { database } from "@/lib/database";

import { UpdateList } from "./updateListSchema";
import { InputType, OutputType } from "./updateListTypes";

async function performAction (data: InputType): Promise<OutputType> {

}

export const updateList = createServerAction(UpdateList, performAction);