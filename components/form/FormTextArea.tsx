"use client";

import React, { KeyboardEventHandler, Ref, forwardRef } from 'react';

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
      <div>
        {/* Render FormTextArea component */}
        <textarea
          id={id}
          ref={ref} // Attach the ref to the textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        // Add other necessary props
        />
      </div>
    );
  }
);

export default FormTextArea;