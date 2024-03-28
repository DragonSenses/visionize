"use client";

import React from 'react';

interface CardFormProps {
  listId: string;
  isEditing: boolean;
  disableEditing: () => void;
  enableEditing: () => void;
}

export default function CardForm({
  listId,
  isEditing,
  disableEditing,
  enableEditing,
}: CardFormProps) {
  return (
    <div>CardForm</div>
  )
}
