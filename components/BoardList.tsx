import React from 'react';
import Link from 'next/link';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { UserRound } from 'lucide-react';

import { database } from '@/lib/database';
import BoardCreationButton from '@/components/BoardCreationButton';
import FormPopover from '@/components/form/FormPopover';

export default async function BoardList() {
  const { orgId } = auth();

  if (!orgId) {
    return redirect('/select-org');
  }

  const boards = await database.board.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: 'desc',
    }
  });

  return (
    <div className='space-y-4'>
      {/* User icon header */}
      <div className='flex items-center text-lg text-neutral-700 font-semibold'>
        <UserRound className='h-6 w-6 mr-2' />
        Your boards
      </div>
      {/* Grid of boards */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {boards.map((board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
          >
            <p>
              {board.title}
            </p>
          </Link>
        ))}
        <FormPopover side='right' sideOffset={10}>
          <BoardCreationButton />
        </FormPopover>
      </div>

    </div>
  )
}
