import React from 'react';
import { Button } from '@/components/ui/button';

export default function BoardCreationButton() {
  return (
    <Button
      className='relative flex flex-col items-center h-full w-full rounded-sm aspect-video bg-muted gap-y-1 justify-center transition hover:opacity-75'
    >
      <p className='text-sm'>Create new board</p>
      <span className='text-xs'>
        15 remaining
      </span>
    </Button>
  )
}
