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
      <div className='flex-shrink-0 w-1' />
    </ol>
  )
}
