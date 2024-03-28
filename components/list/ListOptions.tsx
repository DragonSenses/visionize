"use client";

import React, { ElementRef, useRef } from 'react';
import { List } from '@prisma/client';
import { MoreHorizontal, X } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from '@/components/ui/separator';
import FormSubmitButton from '@/components/form/FormSubmitButton';
import { useServerAction } from '@/hooks/useServerAction';
import { deleteList } from '@/actions/deleteList';
import { copyList } from '@/actions/copyList';

interface ListOptionsProps {
  data: List;
  handleAddCardToList: () => void;
};

export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {
  const closeRef = useRef<ElementRef<'button'>>(null);

  /* Copy list server action */
  const { executeServerAction: executeCopyServerAction } = useServerAction(copyList, {
    onSuccess(data) {
      toast.success(`List "${ data.title }" copied.`);
      closeRef.current?.click();
    },
    onError(error) {
      toast.error(error);
    },
  });

  function onCopy(formData: FormData) {
    // Extract list id and boardId found in the hidden inputs
    const id = formData.get('id') as string;
    const boardId = formData.get('boardId') as string;

    executeCopyServerAction({ id, boardId });
  }

  /* Delete list server action */
  const { executeServerAction: executeDeleteServerAction } = useServerAction(deleteList, {
    onSuccess(data) {
      toast.success(`List "${ data.title }" deleted.`);
      closeRef.current?.click();
    },
    onError(error) {
      toast.error(error);
    },
  });

  function onDelete(formData: FormData) {
    // Extract list id and boardId found in the hidden inputs
    const id = formData.get('id') as string;
    const boardId = formData.get('boardId') as string;

    executeDeleteServerAction({ id, boardId });
  }

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
        <PopoverClose ref={closeRef} asChild>
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
        <form action={onCopy}>
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormSubmitButton>
            Copy list
          </FormSubmitButton>
        </form>
        <Separator />
        <form action={onDelete}>
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
