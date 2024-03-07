"use client";

import React from 'react';
import { Board } from '@prisma/client';

import { Button } from '@/components/ui/button';

interface BoardTitleFormProps {
  data: Board;
};

export default function BoardTitleForm({
  data,
}: BoardTitleFormProps) {
  return (
    <Button
      variant='transparent'
      className='h-auto w-auto p-1 px-2 font-bold text-lg'
    >
      {data.title}
    </Button>
  );
}
