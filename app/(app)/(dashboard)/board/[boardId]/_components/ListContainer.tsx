import React from 'react';

import { List } from '@prisma/client';

interface ListContainerProps {
  boardId: string;
  data: List[];
}

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  return (
    <div>ListContainer</div>
  )
}
