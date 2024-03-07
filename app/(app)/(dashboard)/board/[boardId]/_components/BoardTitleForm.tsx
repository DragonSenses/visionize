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
    <Button>
      {data.title}
    </Button>
  )
}
