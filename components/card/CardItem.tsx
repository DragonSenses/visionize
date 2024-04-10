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
    <div>CardItem</div>
  )
}
