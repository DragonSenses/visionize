"use client";

import React from 'react';
import { Draggable, Droppable } from '@hello-pangea/dnd';

import { Card } from '@prisma/client';
import { useCardModal } from '@/hooks/useCardModal';

interface CardItemProps {
  data: Card,
  index: number;
}

export default function CardItem({
  data,
  index,
}: CardItemProps) {
  const cardModal = useCardModal();
  
  return (
    <Draggable
      draggableId={data.id}
      index={index}
    >
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          onClick={() => cardModal.onOpen(data.id)}
          className='py-2 px-3 bg-white text-sm shadow-sm rounded-md truncate border-2 border-transparent hover:border-black'
        >
          {data.title}
        </div>
      )}
    </Draggable>
  )
}
