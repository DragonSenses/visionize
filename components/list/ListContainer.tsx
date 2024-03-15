import React from 'react';

import { ListWithCards } from '@/types/types';
import ListForm from '@/components/list/ListForm';

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  return (
    <ol>
      <ListForm />
      <div>ListContainer</div>
    </ol>
  )
}
