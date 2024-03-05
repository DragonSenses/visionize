import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { database } from '@/lib/database';

export default function BoardIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { boardId: string; }
}) {
  const { orgId } = auth();

  if (!orgId) {
    redirect('/org-selection');
  }

  const board = await database.board.findUnique({
    where: { 
      id: params.boardId,
      orgId,
    },
  });

  if (!board) {
    notFound();
  }

  return (
    <div>
      <main className='relative h-full pt-28'>
        {children}
      </main>
    </div>
  )
}
