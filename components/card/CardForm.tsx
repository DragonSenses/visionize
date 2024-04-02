"use client";

import React, { forwardRef } from 'react';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import FormTextArea from '@/components/form/FormTextArea';

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
      <form>
        <FormTextArea />
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