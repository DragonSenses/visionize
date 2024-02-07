"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { database } from "@/lib/database";

const CreateBoard = z.object({
  title: z.string(),
});

export default async function createBoard(formData: FormData) {
  const { title } = CreateBoard.parse({
    title: formData.get("title"),
  });

  await database.board.create({
    data: {
      title,
    },
  });

  revalidatePath('/org/org_yourOrgIdHere');
}