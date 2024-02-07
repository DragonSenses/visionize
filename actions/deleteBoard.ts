"use server";

import { revalidatePath } from 'next/cache';

import { database } from '@/lib/database';

export default async function deleteBoard(id: string) {
  await database.board.delete({
    where: {
      id: id
    }
  });

  revalidatePath('/org/org_yourOrgIdHere');
}
