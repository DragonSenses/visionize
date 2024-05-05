"use client";

import React from 'react';

import { CardWithList } from '@/types/types';

interface DescriptionProps {
  data: CardWithList
}

export default function Description({
  data
}: DescriptionProps) {
  return (
    <div>{data.description}</div>
  )
}
