import { XCircle } from 'lucide-react';
import React from 'react'

interface FormErrorsProp {
  id: string;
  errors?: Record<string, string[] | undefined>;
};

export default function FormErrors({
  id, 
  errors,
}: FormErrorsProp) {
  
  if (!errors) {
    return null;
  }

  return (
    <div
      id={`${id}-error`}
      aria-live='polite'
      className='mt-2 text-xs text-rose-500'
    >
      {errors?.[id]?.map((error: string) => (
        <div
          key={error}
          className='flex items-center rounded-sm font-medium p-2 border border-rose-500 bg-rose-500/10'
        >
          <XCircle className='h-4 w-4 mr-2'/>
          {error}
        </div>
      ))}
    </div>
  )
}
