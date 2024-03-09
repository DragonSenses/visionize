"use server";

import { revalidatePath } from 'next/cache';

import { database } from '@/lib/database';

interface BoardData {
  title: string;
};

export default async function updateBoard(id: string, boardData: BoardData) {

  await database.board.update({
    where: {
      id: id,
    },
    data: {
      title: boardData.title
    }
  });

  revalidatePath('/org/org_yourOrgIdHere');
}
