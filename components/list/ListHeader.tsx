"use client";

import React, { ElementRef, useRef, useState } from 'react';

import { List } from '@prisma/client';
import { useEventListener } from 'usehooks-ts';

import FormInput from '@/components/form/FormInput';

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

  /**
   * When user clicks "Escape" key, it disables editing mode.
   * @param event the key press event
   */
  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      disableEditing();
    }
  }

  // Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
  // Listen for the 'keydown' event on the entire document (window level)
  useEventListener('keydown', handleEscapeKey);

  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      {isEditing ? (
        <form className='flex-1 px-[2px]'>
          <input hidden id='id' name='id' value={data.id} />
          <input hidden id='boardId' name='boardId' value={data.boardId} />
          <FormInput
            id='title'
            defaultValue={title}
            placeholder='Enter list title...'
            onBlur={() => {}}
            ref={inputRef}
            className='h-7 px-[7px] py-1 text-sm font-medium border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus:bg-white'
          />
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className='h-7 w-full px-2.5 py-1 text-sm font-medium border-transparent'
        >
          {title}
        </div>
      )}
    </div>
  )
}
