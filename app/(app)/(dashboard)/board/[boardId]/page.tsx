import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { database } from '@/lib/database';

import ListContainer from './_components/ListContainer';

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
};

export default async function BoardIdPage({
  params
}: BoardIdPageProps) {
  const { orgId } = auth();

  if (!orgId) {
    return redirect('/org-selection');
  }

  // Retrieve lists for the individual board ID in ascending order.
  // Additionally, verify that the related board associated with each list
  // has a matching orgId for the current user.
  // Include cards within each list, also sorted in ascending order.
  const lists = await database.list.findMany({
    where: {
      boardId: params.boardId,
      board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: 'asc',
        },
      },
    },
    orderBy: {
      order: 'asc',
    }
  });

  return (
    <div className='h-full p-4 overflow-x-auto'>
      <ListContainer 
        boardId={params.boardId}
        data={lists}
      />
    </div>
  )
}
