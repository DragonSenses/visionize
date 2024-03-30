"use client";

import React, { ElementRef, useRef, useState } from 'react';

import { ListWithCards } from '@/types/types';
import ListHeader from '@/components/list/ListHeader';
import CardForm from '@/components/card/CardForm';

interface ListItemProps {
  data: ListWithCards;
  index: number;
}

export default function ListItem({
  data,
  index,
}: ListItemProps) {
  const textAreaRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);

  function disableEditing() {
    setIsEditing(false);
  }

  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    });
  }

  return (
    <li className='h-full w-72 shrink-0 select-none'>
      <div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
        <ListHeader 
          data={data} 
          handleAddCardToList={enableEditing}
        />
        <CardForm 
          listId={data.id}
          isEditing={isEditing}
          enableEditing={enableEditing}
          disableEditing={disableEditing}
        />
      </div>
    </li>
  )
}
