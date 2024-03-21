"use client";

import React from 'react'

import { List } from '@prisma/client';

interface ListHeaderProps {
  data: List;
}

export default function ListHeader({
  data,
}: ListHeaderProps) {
  return (
    <div className='flex pt-2 px-2 text-sm font-semibold justify-between items-start gap-x-2'>
      <div className='h-7 w-full px-2.5 py-1 text-sm font-medium border-transparent'>
        {data.title}
      </div>
    </div>
  )
}
