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
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
