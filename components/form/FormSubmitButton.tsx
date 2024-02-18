"use client";

import React from 'react';

interface FormSubmitProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' 
    | 'link' | 'primary';
};

export default function FormSubmitButton({
  children,
  className,
  disabled,
  variant,
}: FormSubmitProps) {
  return (
    <div>FormSubmitButton</div>
  )
}
