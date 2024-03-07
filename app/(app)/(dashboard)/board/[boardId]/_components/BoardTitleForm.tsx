"use client";

import React, { useState } from 'react';
import { Board } from '@prisma/client';

import { Button } from '@/components/ui/button';
import FormInput from '@/components/form/FormInput';

interface BoardTitleFormProps {
  data: Board;
};

export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  const [isEditing, setIsEditing] = useState(false);

  
  function disabledEditing() {
    setIsEditing(false);
  }
  
  function enableEditing() {
    setIsEditing(true);
  }

  if (isEditing) {
    return (
      <form className='flex items-center gap-x-2'>
        <FormInput 
          id='title'
          defaultValue={data.title}
          onBlur={() => {}}
          className='bg-transparent h-7 px-[7px] py-1 border-none text-lg font-bold focus-visible:outline-none focus-visible:ring-transparent'
        />
      </form>
    )
  }

  return (
    <Button
      variant='transparent'
      className='h-auto w-auto p-1 px-2 font-bold text-lg'
    >
      {data.title}
    </Button>
  );
}
