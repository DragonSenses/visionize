"use client";

import React, { forwardRef } from 'react';
import { Plus, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import FormTextArea from '@/components/form/FormTextArea';
import FormSubmitButton from '../form/FormSubmitButton';

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


  if (isEditing) {
    return (
      <form className='px-1 py-0.5 m-1 space-y-4'>
        <FormTextArea 
          id='title'
          label='title'
          value='title'
          defaultValue='title'
          placeholder="Enter a title for this card..."
          required={false}
          errors={{}}
          className={''}
          onBlur={() => {}}
          onClick={() => {}}
          onChange={() => {}}
          onKeyDown={() => {}}
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
        <Plus className='h-4 w-4 mr-2'/>
        Add card
      </Button>
    </div>
  )
});

CardForm.displayName="CardForm";

export default CardForm;