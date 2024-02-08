"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

export default function BoardFormButton() {

  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type='submit'>
      Submit
    </Button>
  )
}
