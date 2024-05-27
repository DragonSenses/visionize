"use client";

import React, { ElementRef, KeyboardEventHandler, forwardRef, useRef } from 'react';
import { Plus, X } from 'lucide-react';
import { useEventListener, useOnClickOutside } from 'usehooks-ts';
import { toast } from 'sonner';
import { useParams } from 'next/navigation';

import { createCard } from '@/actions/createCard';
import { useServerAction } from '@/hooks/useServerAction';
import { Button } from '@/components/ui/button';
import FormTextArea from '@/components/form/FormTextArea';
import FormSubmitButton from '@/components/form/FormSubmitButton';

interface CardFormProps {
  listId: string;
  isEditing: boolean;
  disableEditing: () => void;
  enableEditing: () => void;
}

const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}, ref) => {
  const params = useParams();

  const formRef = useRef<ElementRef<"form">>(null);

  const { executeServerAction: executeCreateCard, fieldErrors } = useServerAction(createCard, {
    onSuccess: (data) => {
      toast.success(`Card "${data.title} created.`);
      formRef.current?.reset(); // Clear the form after success
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  /**
   * When the user presses the "Escape" key, it disables editing mode.
   * @param event The keyboard event
   */
  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      disableEditing();
    }
  }

  // Custom hook that handles clicks outside a specified element.
  // Disable editing when user clicks outside the form
  useOnClickOutside(formRef, disableEditing);

  // Custom hook that attaches event listeners to DOM elements, the window, or media query lists.
  // Listen for the 'keydown' event on the entire document (window level)
  useEventListener('keydown', handleEscapeKey);

  /**
   * Handles the "Enter" key press inside the TextArea.
   * Overrides the default behavior (new line) to submit the form,
   * unless the user is also holding the "Shift" key.
   * @param event The keyboard event
   */
  const onTextAreaKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      formRef.current?.requestSubmit();
    }
  }

  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;
    const listId = formData.get('listId') as string;
    const boardId = params.boardId as string;

    executeCreateCard({ title, listId, boardId });
  }

  if (isEditing) {
    return (
      <form
        action={onSubmit}
        ref={formRef}
        className='px-1 py-0.5 m-1 space-y-4'
      >
        <FormTextArea
          id='title'
          placeholder="Enter a title for this card..."
          errors={fieldErrors}
          onKeyDown={onTextAreaKeyDown}
          ref={ref}
        />
        <input
          hidden
          id='listId'
          name='listId'
          value={listId}
        />
        <div className='flex items-center gap-x-1'>
          <FormSubmitButton>
            Add card
          </FormSubmitButton>
          <Button onClick={disableEditing} size='sm' variant='ghost'>
            <X className='h-5 w-5' />
          </Button>
        </div>
      </form>
    )
  }

  return (
    <div className='pt-2 px-2'>
      <Button
        onClick={enableEditing}
        size='sm'
        variant='ghost'
        className='justify-start h-auto px-2 py-1.5 w-full text-sm text-muted-foreground'
      >
        <Plus className='h-4 w-4 mr-2' />
        Add card
      </Button>
    </div>
  )
});

CardForm.displayName = "CardForm";

export default CardForm;