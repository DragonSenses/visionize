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
    <li>
      <div>
        <ListHeader />
      </div>
    </li>
  )
}
