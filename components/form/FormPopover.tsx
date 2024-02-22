import React from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface FormPopoverProps {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

export default function FormPopover({
  children,
  align,
  sideOffset = 0,
  side = 'bottom',
}: FormPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        sideOffset={sideOffset}
        side={side}
        className='w-80 pt-3'
      >
        <div className='pb-4 font-medium text-sm text-center text-neutral-600'>
          Create board
        </div>
      </PopoverContent>
    </Popover>
  )
}
