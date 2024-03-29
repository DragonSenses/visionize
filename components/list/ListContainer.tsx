"use client";

import React, { useState } from 'react';

import { ListWithCards } from '@/types/types';
import ListForm from '@/components/list/ListForm';
import ListItem from '@/components/list/ListItem';

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
    <ol className='flex h-full gap-x-3'>
      {
        orderedListData.map((list, index) => {
          return (
            <ListItem
              key={list.id}
              index={index}
              data={list}
            />
          )
        })
      }
      <ListForm />
      <div className='flex-shrink-0 w-1' />
    </ol>
  )
}
