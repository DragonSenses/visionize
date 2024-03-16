"use client";

import React, { ElementRef, useRef, useState } from 'react';
import { Plus } from 'lucide-react';

import ListWrapper from './ListWrapper';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';

export default function ListForm() {
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

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

  /**
   * When user clicks "Escape" key, it disables editing mode.
   * @param event the key press event
   */
  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      disableEditing();
    }
  }

  useEventListener('keydown', handleEscapeKey);
  useOnClickOutside(formRef, disableEditing);

  return (
    <ListWrapper>
      <button
        className='flex items-center w-full rounded-md p-3 font-medium text-sm bg-white/80 hover:bg-white/50 transition'
      >
        <Plus className='h-4 w-4 mr-2' />
        Add list
      </button>
    </ListWrapper>
  )
}
