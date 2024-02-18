"use client";

import React from 'react';
import { useFormStatus } from 'react-dom';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending || disabled}
      size='sm'
      type='submit'
      variant={variant}
      className={cn(className)}
    >
      {children}
    </Button>
  )
}
