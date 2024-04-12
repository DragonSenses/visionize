"use client";

import React from 'react';
import { Draggable, Droppable } from '@hello-pangea/dnd';

import { Card } from '@prisma/client';

interface CardItemProps {
  data: Card,
  index: number;
}

export default function CardItem({
  data,
  index,
}: CardItemProps) {
  return (
    <Draggable
      draggableId={data.id}
      index={index}
    >
      {(provided) => (
        <div
          role="button"
          className='py-2 px-3 bg-white text-sm shadow-sm rounded-md truncate border-2 border-transparent hover:border-black'
        >
          {data.title}
        </div>
      )}
    </Draggable>
  )
}
