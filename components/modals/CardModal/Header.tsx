"use client";

import { CardWithList } from '@/types/types';
import React from 'react';

interface HeaderProps {
  data: CardWithList;
}

export default function Header({
  data,
}: HeaderProps) {
  return (
    <div>
      Header
    </div>
  )
}
