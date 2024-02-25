"use client";

import React, { forwardRef } from 'react'
import { useFormStatus } from 'react-dom';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FormErrors from '@/components/form/FormErrors';

interface FormInputProps {
  id: string;
  className?: string;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  errors?: Record<string, string[] | undefined>;
  onBlur?: () => void;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
  id,
  className,
  defaultValue = "",
  label,
  placeholder,
  type,
  disabled,
  required,
  errors,
  onBlur,
}, ref) => {
  const { pending } = useFormStatus();

  return (
    <div className='space-y-2'>
      <div className='space-y-1'>
        {label ? (
          <Label 
            htmlFor={id}
            className='text-xs font-semibold text-neutral-700'
          >
            {label}
          </Label>
        ) : null}
        <Input 
          id={id}
          defaultValue={defaultValue}
          name={id}
          placeholder={placeholder}
          type={type}
          disabled={pending || disabled}
          required={required}
          onBlur={onBlur}
          ref={ref}
          className={cn(
            'text-sm px-2 py-1 h-7',
            className,
          )}
          aria-describedby={`${id}-error`}
        />
      </div>
      <FormErrors 
        id={id}
        errors={errors}
      />
    </div>
  )
});

FormInput.displayName = "FormInput";

export default FormInput;