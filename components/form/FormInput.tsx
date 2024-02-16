import React from 'react'

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

const FormInput = {
  return (
    <div>FormInput</div>
  )
}

export default FormInput;