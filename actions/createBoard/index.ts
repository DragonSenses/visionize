"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { database } from "@/lib/database";

import { InputType, ReturnType } from "./createBoardTypes";

async function performAction (data: InputType): Promise<ReturnType> {
  // Authenticate userId with Clerk
  const { userId } = auth();

  // If user is not logged-in
  if (!userId) {
    return {
      error: 'Unauthorized',
    }
  }

  const { title } = data;

  let board;

  try {
    board = await database.board.create({
      data: {
        title,
      }
    });
  } catch(error) {
    return {
      error: "Internal error: failed to create in database."
    }
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
}

// Create server action here