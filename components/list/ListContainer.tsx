"use client";

import React, { useState } from 'react';

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
  const [orderedListData, setOrderedListData] = useState(data);

  return (
    <ol>
      {
        orderedListData.map((list, index) => {
          return (
            <div
              key={list.id}
            >
              {list.id}
            </div>
          )
        })
      }
      <ListForm />
      <div className='flex-shrink-0 w-1' />
    </ol>
  )
}
