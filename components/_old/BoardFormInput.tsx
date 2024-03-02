"use client";

import React from 'react';
import { useFormStatus } from 'react-dom';

import { Input } from '@/components/ui/input';

interface BoardFormInputProps {
  errors?: {
    title?: string[];
  }
}

export default function BoardFormInput({
  errors
} : BoardFormInputProps) {

  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col space-y-2">
      <Input
        id='title'
        name='title'
        placeholder='Enter a board title'
        required
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className='text-rose-500'>
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  )
}
