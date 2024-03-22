"use client";

import React, { ElementRef, useRef, useState } from 'react';

import { List } from '@prisma/client';

interface ListHeaderProps {
  data: List;
}

export default function ListHeader({
  data,
}: ListHeaderProps) {

  const [title, setTitle] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<'form'>>(null);
  const inputRef = useRef<ElementRef<'input'>>(null);

  function disableEditing() {
    setIsEditing(false);
  }

  // Enables editing mode and focus input
  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  }

  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      <div className='h-7 w-full px-2.5 py-1 text-sm font-medium border-transparent'>
        {data.title}
      </div>
    </div>
  )
}
