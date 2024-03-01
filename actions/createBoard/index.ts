"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { database } from "@/lib/database";
import { createServerAction } from "@/lib/createServerAction";

import { InputType, ReturnType } from "./createBoardTypes";
import { CreateBoard } from "./createBoardSchema";

async function performAction (data: InputType): Promise<ReturnType> {
  // Verify that the user is logged in with Clerk & get their unique identifier
  const { userId, orgId } = auth();

  // If user is not logged-in, return an object with error property: Unauthorized
  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    }
  }

  // Destructure the title property from the validated data
  const { title, image } = data;

  const [
    imageId,
    imageThumbUrl,
    imageFullUrl,
    imageLinkHtml,
    imageUserName,
  ] = image.split("|");

  if (!imageId || !imageThumbUrl || !imageFullUrl 
  || !imageLinkHtml || !imageUserName) {
    return {
      error: 'Failed to create board. A field is missing.'
    };
  }

  let board;

  // Try to create a new board in the database
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

  // Invalidates the cache for a given path on the server 
  // and triggers a re-fetch of the data for that page
  revalidatePath(`/board/${board.id}`);

  // Return an object with a data property set to the board object, which 
  // contains the information about the newly created board
  return { data: board };
}

/**
 * Create and export a type-safe server action createBoard, that creates a 
 * Board in the database with validated input data from the user. 
 * 
 * createServerAction function with two arguments: CreateBoard and performAction.
 * 
 * First argument is the schema that validates the input data. 
 * Second argument is the function that performs the actual logic of the server action.
 * 
 * createServerAction takes two parameters: a schema and a handler function.
 * 
 * The schema defines the shape and validation rules of the input data for the 
 * server action. 
 * 
 * The handler function performs the actual logic of the server action and 
 * returns an object that contains the output data or any errors.
 */
export const createBoard = createServerAction(CreateBoard, performAction);