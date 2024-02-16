import React, { forwardRef } from 'react'
import { useFormStatus } from 'react-dom';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
  const { pending, data, method, action } = useFormStatus();

  return (
    <div className='space-y-2'>
      <div className='space-y-1'>
        {label ? (
          <Label 
            htmlFor={id}
          >
            Label
          </Label>
        ) : null}
        <Input />
      </div>
    </div>
  )
});

FormInput.displayName = "FormInput";

export default FormInput;