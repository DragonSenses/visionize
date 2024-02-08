"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { database } from "@/lib/database";

export type State = {
  errors?: {
    title?: string[];
  },
  message?: string | null;
};

// Define the CreateBoard object schema
const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Must be 3 or more characters long",
  }),
});

export default async function createBoard(
  prevState: State,
  formData: FormData
) {
  // Validate the form data using the CreateBoard schema
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  // If zod validation fails, then we will have an array of errors for a specific field
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields.",
    }
  }

  // Destructure the title property from the validated data
  const { title } = validatedFields.data;

  // Try to create a new board in the database
  try {
    await database.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      message: `Database Error: {error}`,
    }
  }

  // Revalidate and redirect to given path
  const pathname = `/org/org_yourOrgIdHere`;
  revalidatePath(pathname);
  redirect(pathname);
}
