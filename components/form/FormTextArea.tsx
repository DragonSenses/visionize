"use client";

import React, { KeyboardEventHandler, Ref, forwardRef } from 'react';

import { Label } from '@/components/ui/label';

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
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
}

const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  function FormTextArea(
    {
      id,
      label,
      value,
      defaultValue,
      placeholder,
      required,
      disabled,
      errors,
      className,
      onBlur,
      onClick,
      onChange,
      onKeyDown,
    }: FormTextAreaProps,
    ref: Ref<HTMLTextAreaElement>
  ) {
    return (
      <div className='w-full space-y-2'>
        <div className='w-full space-y-1'>
          {label ? (
            <Label
              htmlFor={id}
              className='text-xs text-neutral-700 font-semibold'
            >
              {label}
            </Label>
          ): null}
        </div>
      </div>
    );
  }
);

export default FormTextArea;