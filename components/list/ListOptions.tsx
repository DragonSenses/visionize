"use client";

import React from 'react';
import { List } from '@prisma/client';
import { MoreHorizontal, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from '@/components/ui/separator';
import FormSubmitButton from '@/components/form/FormSubmitButton';

interface ListOptionsProps {
  data: List;
  handleAddCardToList: () => void;
};

export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Open button */}
        <Button variant='ghost' className='h-auto w-auto p-2'>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent align='start' side='bottom' className='px-0 pt-3 pb-3'>
        <div className='pb-4 text-center text-sm font-medium text-neutral-600'>
          List actions
        </div>
        {/* Close button */}
        <PopoverClose asChild>
          <Button
            variant='ghost'
            className='absolute top-2 right-2 h-auto w-auto p-2 text-neutral-600'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
        {/* List Actions */}
        <Button
          onClick={handleAddCardToList}
          variant='ghost'
          className='justify-start w-full h-auto p-2 px-5 rounded-none font-normal text-sm'
        >
          Add card +
        </Button>
        <form>
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormSubmitButton>
            Copy list
          </FormSubmitButton>
        </form>
        <Separator />
        <form>
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormSubmitButton>
            Delete list
          </FormSubmitButton>
        </form>
      </PopoverContent>
    </Popover>
  )
}