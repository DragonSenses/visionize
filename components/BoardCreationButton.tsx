import React from 'react';
import { HelpCircle } from 'lucide-react';

import BoardTooltip from '@/components/BoardTooltip';
import { FREE_BOARD_THRESHOLD } from '@/constants/boards';
import { getAvailableBoardCount } from '@/lib/orgLimit';

interface BoardCreationButtonProps {
  orgId: string;
}

export default async function BoardCreationButton({
  orgId,
}: BoardCreationButtonProps) {

  const availableBoardCount = await getAvailableBoardCount(orgId);

  return (
    <div
      role='button'
      className='relative flex flex-col items-center h-full w-full rounded-sm aspect-video bg-muted gap-y-1 justify-center transition hover:opacity-75'
    >
      <p className='text-sm'>Create new board</p>
      <span className='text-xs'>
        {`${FREE_BOARD_THRESHOLD - availableBoardCount} remaining`}
      </span>
      <BoardTooltip 
        sideOffset={40}
        description={`
          Free workspaces allow up to ${FREE_BOARD_THRESHOLD} boards. 
          Upgrade this workspace to create unlimited boards.
        `}
      >
        <HelpCircle className='absolute bottom-2 right-2 h-[14px] w-[14px]'/>
      </BoardTooltip>
    </div>
  )
}
