"use client";

import React from 'react'

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MoreHorizontal, X } from 'lucide-react';

interface BoardOptionsProps {
  id: string;
};

export default function BoardOptions({ id }: BoardOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='transparent'
          className='h-auto w-auto p-2'
        >
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align='start'
        side='bottom'
        className='px-0 pt-3 pb-3'
      >
        <div className='pb-4 text-sm text-center text-neutral-600 font-medium'>
          BoardOptions
        </div>
        <PopoverClose asChild>
          <Button
            variant='ghost'
            className='absolute h-auto w-auto p-2 top-2 right-2 text-neutral-600'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
