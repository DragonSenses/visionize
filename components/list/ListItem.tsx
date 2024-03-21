"use client";

import React from 'react';

import { ListWithCards } from '@/types/types';
import ListHeader from '@/components/list/ListHeader';

interface ListItemProps{
  data: ListWithCards;
  index: number;
}

export default function ListItem({
  data,
  index,
}: ListItemProps) {
  return (
    <li className='h-full w-72 shrink-0 select-none'>
      <div className='w-full rounded-md bg-[#f1f2f4] shadow-md pb-2'>
        <ListHeader />
      </div>
    </li>
  )
}
