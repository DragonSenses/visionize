import React from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface BoardTooltipProps {
  children: React.ReactNode;
  description: string;
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

export default function BoardTooltip({
  children,
  description,
  sideOffset = 0,
  side = 'bottom',
}: BoardTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          sideOffset={sideOffset}
          className='text-xs max-w-[220px] break-words'
        >
          {description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
