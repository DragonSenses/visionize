"use client";

import React, { KeyboardEventHandler } from 'react';

interface FormTextAreaProps {
  id: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors: Record<string, string[] | undefined>;
  className?: string;
  onBlur?: () => void;
  onClick?: () => void;
  onChange?: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
}

export default function FormTextArea() {
  return (
    <div>FormTextArea</div>
  )
}
