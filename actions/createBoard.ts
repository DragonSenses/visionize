"use server";

import { database } from "@/lib/database";

export default async function createBoard(formData: FormData) {
  const title = formData.get("title") as string;

  await database.board.create({
    data: {
      title,
    },
  });
}