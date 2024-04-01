"use client";

import React, { KeyboardEventHandler, Ref, forwardRef } from 'react';

import { cn } from '@/lib/utils';
import FormErrors from '@/components/form/FormErrors';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

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
          <Textarea 
            ref={ref}
            id={id}
            name={id}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            onBlur={onBlur}
            onClick={onClick}
            onChange={onChange}
            onKeyDown={onKeyDown}
            aria-describedby={`${id}-error`}
            className={cn(
              'resize-none shadow-sm ring-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0',
              className
            )}
          />
        </div>
        <FormErrors 
          id={id}
          errors={errors}
        />
      </div>
    );
  }
);

export default FormTextArea;