"use client";

import React, { forwardRef } from 'react';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

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
  return (
    <div>
      <Button onClick={enableEditing}>
        <Plus />
        Add card
      </Button>
    </div>
  )
});

CardForm.displayName="CardForm";

export default CardForm;