"use client";

import React, { ElementRef, useRef, useState } from 'react';
import { Board } from '@prisma/client';

import { Button } from '@/components/ui/button';
import FormInput from '@/components/form/FormInput';
import { useServerAction } from '@/hooks/useServerAction';
import { updateBoard } from '@/actions/updateBoard';
import { toast } from 'sonner';

interface BoardTitleFormProps {
  data: Board;
};

export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [titleData, setTitleData] = useState(data.title);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const { executeServerAction } = useServerAction(updateBoard, {
    onSuccess: (data) => {
      toast.success(`Board "${data.title} updated!`);
      setTitleData(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    }
  });

  function disableEditing() {
    setIsEditing(false);
  }
  
  /**
   * Enables editing mode and focus input.
   */
  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    })
  }

  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;
    console.log(`Submitted: ${title}`);
    executeServerAction({
      id: data.id,
      title,
    });
  }

  function onBlur() {
    formRef.current?.requestSubmit();
  }

  if (isEditing) {
    return (
      <form 
        action={onSubmit} 
        ref={formRef} 
        className='flex items-center gap-x-2'
      >
        <FormInput
          ref={inputRef}
          id='title'
          defaultValue={titleData}
          onBlur={onBlur}
          className='bg-transparent h-7 px-[7px] py-1 border-none text-lg font-bold focus-visible:outline-none focus-visible:ring-transparent'
        />
      </form>
    )
  }

  return (
    <Button
      onClick={enableEditing}
      variant='transparent'
      className='h-auto w-auto p-1 px-2 font-bold text-lg'
    >
      {titleData}
    </Button>
  );
}
