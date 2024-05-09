"use client";

import React from 'react';

import { CardWithList } from '@/types/types';
import { Skeleton } from '@/components/ui/skeleton';

interface ActionsProps {
  data: CardWithList
}

export default function Actions({
  data,
}: ActionsProps) {
  return (
    <div>Actions</div>
  )
}

Actions.Skeleton = function ActionsSkeleton() {
  return (
    <div className='mt-2 space-y-2'>
      <Skeleton className='w-20 h-4 bg-neutral-200'/>
      <Skeleton className='w-full h-8 bg-neutral-200'/>
      <Skeleton className='w-full h-8 bg-neutral-200'/>
    </div>
  )
}