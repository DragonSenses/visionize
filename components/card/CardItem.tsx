"use client";

import { Card } from '@prisma/client';
import React from 'react';

interface CardItemProps {
  data: Card,
  index: number;
}

export default function CardItem({
  data,
  index,
}: CardItemProps) {
  return (
    <div 
      className='py-2 px-3 bg-white text-sm shadow-sm rounded-md truncate border-2 border-transparent hover:border-black'
    >
      {data.title}
    </div>
  )
}
