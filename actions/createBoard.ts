"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { database } from "@/lib/database";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Must be 3 or more characters long",
  }),
});

export default async function createBoard(
  prevState: State,
  formData: FormData
) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields.",
    };
  }

  const { title } = validatedFields.data;

  try {
    await database.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    console.log(`Database Error: ${error}`);
  }

  revalidatePath("/org/org_yourOrgIdHere");
}
