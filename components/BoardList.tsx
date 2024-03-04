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
            className='group relative h-full w-full p-2 aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm overflow-hidden'
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
          >
            <div
              className='absolute inset-0 bg-black/30 group-hover:bg-black/40 transition'
            />
            <p className='relative font-semibold text-white'>
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
