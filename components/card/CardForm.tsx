"use client";

import React, { forwardRef } from 'react';

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
    <div>CardForm</div>
  )
});

export default CardForm;