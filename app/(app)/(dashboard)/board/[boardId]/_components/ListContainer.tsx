import React from 'react';

import { ListWithCards } from '@/types/types';

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  return (
    <div>ListContainer</div>
  )
}
