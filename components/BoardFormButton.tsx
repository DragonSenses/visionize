"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

interface BoardFormButtonProps {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  type: "submit" | "reset" | "button";
  variant?: "default" | "destructive" | "outline" | "secondary" | 
            "ghost" | "link" | "primary" | null | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function BoardFormButton({
  children,
  size,
  type,
  variant,
  onClick,
}: BoardFormButtonProps ) {

  const { pending } = useFormStatus();

  return (
    <Button 
      disabled={pending} 
      type={type} 
      variant={variant} 
      size={size} 
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
