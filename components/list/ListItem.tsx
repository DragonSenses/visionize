"use client";

import React from 'react';

import { ListWithCards } from '@/types/types';

interface ListItemProps{
  data: ListWithCards;
  index: number;
}

export default function ListItem({
  data,
  index,
}: ListItemProps) {
  return (
    <div>ListItem</div>
  )
}
