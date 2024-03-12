"use client";

import React from 'react'

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MoreHorizontal } from 'lucide-react';

interface BoardOptionsProps {
  id: string;
};

export default function BoardOptions({ id }: BoardOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='transparent'
        >
          <MoreHorizontal />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align='start'
        side='bottom'
      >
        <div>
          BoardOptions
        </div>
      </PopoverContent>
    </Popover>

  )
}
