import React from 'react';

import { FREE_BOARD_THRESHOLD } from '@/constants/boards';

interface BoardCountDisplayProps {
  remainingBoardCount: number;
}

export default async function BoardCountDisplay({
  remainingBoardCount,
}: BoardCountDisplayProps) {
  return (
    <div>
      <span className='text-xs font-medium'>
        {`${ FREE_BOARD_THRESHOLD - remainingBoardCount } remaining`}
      </span>
    </div>
  )
}
