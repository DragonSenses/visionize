import React from 'react';
import { Board } from '@prisma/client';
import BoardTitleForm from './BoardTitleForm';

interface BoardNavbarProps {
  data: Board;
}

export default async function BoardNavbar({
  data
}: BoardNavbarProps) {

  return (
    <div className='flex items-center fixed h-14 w-full top-14 z-[30] bg-black/50 px-6 gap-x-4 text-white'>
      <BoardTitleForm data={data} />
    </div>
  )
}
