import React, { forwardRef } from 'react'

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

  return (
    <div>FormInput</div>
  )
});

FormInput.displayName = "FormInput";

export default FormInput;