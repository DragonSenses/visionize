"use client";

import React, { ElementRef, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Plus, X } from 'lucide-react';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';
import { toast } from 'sonner';

import ListWrapper from './ListWrapper';
import FormInput from '@/components/form/FormInput';
import FormSubmitButton from '@/components/form/FormSubmitButton';
import { createList } from '@/actions/createList';
import { useServerAction } from '@/hooks/useServerAction';
import { Button } from '@/components/ui/button';

export default function ListForm() {
  const params = useParams();
  const router = useRouter();

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

  const { executeServerAction, fieldErrors } = useServerAction(createList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" created`);
      disableEditing();
      // Refresh the router to refetch all the server components
      router.refresh();
    },
    onError: (error) => {
      toast.error(error);
      console.log(error);
    },
  });

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

  // Custom hook that handles clicks outside a specified element.
  // Disable editing when user clicks outside the form
  useOnClickOutside(formRef, disableEditing);

  function onSubmit(formData: FormData) {
    // Extract title of the list from FormInput
    const title = formData.get('title') as string;

    // Extract boardId found in the hidden input
    const boardId = formData.get('boardId') as string;

    // Create the list with the given form data
    executeServerAction({
      title,
      boardId,
    });
  }

  /* Editing mode */
  if (isEditing) {
    return (
      <ListWrapper>
        <form
          action={onSubmit}
          ref={formRef}
          className='w-full p-3 space-y-4 rounded-md bg-white shadow-md'
        >
          <FormInput 
            ref={inputRef}
            id='title'
            placeholder='Edit list title...'
            className='px-2 py-1 h-7 font-medium text-sm border-transparent focus:border-input hover:border-input transition'
          />
          {/* Hidden input that stores Board ID */}
          <input 
            hidden
            name='boardId'
            value={params.boardId}
          />
          {/* Submit and Exit buttons */}
          <div className='flex items-center gap-x-1'>
            <FormSubmitButton>
              Add list
            </FormSubmitButton>
            <Button
              onClick={disableEditing}
              size='sm'
              variant='ghost'
            >
              <X className='h-5 w-5' />
            </Button>
          </div>
        </form>
      </ListWrapper>
    )
  }

  return (
    <ListWrapper>
      <button
        onClick={enableEditing}
        className='flex items-center w-full rounded-md p-3 font-medium text-sm bg-white/80 hover:bg-white/50 transition'
      >
        <Plus className='h-4 w-4 mr-2' />
        Add list
      </button>
    </ListWrapper>
  )
}
