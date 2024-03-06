import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs';

import { database } from '@/lib/database';
import BoardNavbar from './_components/BoardNavbar';

export async function generateMetadata({
  params
}: {
  params: { boardId: string; };
}) {
  const { orgId } = auth();

  if (!orgId) {
    return { title: 'Board' };
  }

  const board = await database.board.findUnique({
    where: { 
      id: params.boardId,
      orgId,
    },
  });

  return {
    title: board?.title || 'My Board',
  };
}

export default async function BoardIdLayout({
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
    <div
      className='relative h-full bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <BoardNavbar />
      <div className='absolute inset-0 bg-black/20' />
      <main className='relative h-full pt-28'>
        {children}
      </main>
    </div>
  )
}
