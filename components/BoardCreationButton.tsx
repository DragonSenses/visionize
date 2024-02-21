import React from 'react';
import { HelpCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import BoardTooltip from '@/components/BoardTooltip';

const freeBoards = 15;

export default function BoardCreationButton() {
  return (
    <Button
      className='relative flex flex-col items-center h-full w-full rounded-sm aspect-video bg-muted gap-y-1 justify-center transition hover:opacity-75'
    >
      <p className='text-sm'>Create new board</p>
      <span className='text-xs'>
        {freeBoards} remaining
      </span>
      <BoardTooltip 
        sideOffset={40}
        description={`
          Free workspaces allow up to ${freeBoards} boards. 
          Upgrade this workspace to create unlimited boards.
        `}
      >
        <HelpCircle className='absolute bottom-2 right-2 h-[14px] w-[14px]'/>
      </BoardTooltip>
    </Button>
  )
}
