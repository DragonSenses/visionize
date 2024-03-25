"use client";

import React from 'react';
import { List } from '@prisma/client';

interface ListOptionsProps {
  data: List;
  handleAddCardToList: () => void;
};

export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {
  return (
    <div>ListOptions</div>
  )
}
