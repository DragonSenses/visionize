"use client";

import React, { ElementRef, useRef, useState } from 'react';
import { AlignLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { updateCard } from '@/actions/updateCard';
import { useServerAction } from '@/hooks/useServerAction';
import { CardWithList } from '@/types/types';
import { Skeleton } from '@/components/ui/skeleton';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';
import { Button } from '@/components/ui/button';
import FormSubmitButton from '@/components/form/FormSubmitButton';
import FormTextArea from '@/components/form/FormTextArea';

interface DescriptionProps {
  data: CardWithList
}

export default function Description({
  data
}: DescriptionProps) {
  const params = useParams();
  const queryClient = useQueryClient();

  const [isEditing, setIsEditing] = useState(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const textAreaRef = useRef<ElementRef<"textarea">>(null);

  /**
   * Enables editing mode and focus input.
   */
  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    });
  }

  /**
   * Disables editing mode.
   */
  function disableEditing() {
    setIsEditing(false);
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

  // Custom hook that handles clicks outside a specified element.
  // Disable editing when user clicks outside the form
  useOnClickOutside(formRef, disableEditing);

  const {
    executeServerAction: executeUpdateCard,
    fieldErrors
  } = useServerAction(updateCard, {
    onSuccess(data) {
      toast.success(`Card description updated.`);
    },
    onError(error) {
      toast.error(error);
    },
  });

  /**
   * Handles form submission for updating card information.
   * @param formData The form data containing user input.
   */
  function onSubmit(formData: FormData): void {
    // Extract the boardId from the URL parameters (params)
    const boardId = params.boardId as string;

    // Extract the description from the form data
    const description = formData.get('description') as string;

    executeUpdateCard({
      id: data.id, // The card ID (from 'data' prop)
      boardId,
      description,
    });
  }

  return (
    <div className='flex items-start gap-x-3 w-full'>
      <AlignLeft className='h-5 w-5 mt-0.5 text-neutral-700' />
      <div className='w-full'>
        <p className='mb-2 font-semibold text-neutral-700'>
          Description
        </p>
        {isEditing ? (
          <form
            action={onSubmit}
            ref={formRef}
            className='space-y-2'
          >
            <FormTextArea
              ref={textAreaRef}
              id='description'
              placeholder='Add a description...'
              defaultValue={data.description || undefined}
              errors={fieldErrors}
              className='w-full mt-2'
            />
            <div className='flex items-center gap-x-2'>
              <FormSubmitButton>
                Save
              </FormSubmitButton>
              <Button
                type='button'
                onClick={disableEditing}
                size='sm'
                variant='ghost'
              >
                Cancel
              </Button>
            </div>
          </form>
        ) : (
          <div
            onClick={enableEditing}
            role="button"
            className='min-h-[78px] px-3.5 py-3 rounded-md bg-neutral-200 text-sm font-medium'
          >
            {data.description || "Add a description..."}
          </div>
        )}
      </div>
    </div>
  )
}

Description.Skeleton = function DescriptionSkeleton() {
  return (
    <div className='flex items-start gap-x-3 w-full'>
      <Skeleton className='h-6 w-6 bg-neutral-200' />
      <div className='w-full'>
        <Skeleton className='h-6 w-24 mb-2 bg-neutral-200' />
        <Skeleton className='h-[78px] w-full mb-2 bg-neutral-200' />
      </div>
    </div>
  )
}