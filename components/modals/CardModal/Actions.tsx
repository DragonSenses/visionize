"use client";

import React from 'react';
import { Copy, Trash } from 'lucide-react';
import { useParams } from 'next/navigation';

import { CardWithList } from '@/types/types';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

import { copyCard } from '@/actions/copyCard';
import { deleteCard } from '@/actions/deleteCard';
import { useServerAction } from '@/hooks/useServerAction';

interface ActionsProps {
  data: CardWithList
}

export default function Actions({
  data,
}: ActionsProps) {
  const params = useParams();

  const {
    executeServerAction: executeCopyCard,
    isLoading: isLoadingCopy,
  } = useServerAction(copyCard);

  const {
    executeServerAction: executeDeleteCard,
    isLoading: isLoadingDelete,
  } = useServerAction(deleteCard);

  function onCopy() {
    const boardId = params.boardId as string;
    executeCopyCard({
      id: data.id,
      boardId
    });
  }

  function onDelete() {
    const boardId = params.boardId as string;
    executeDeleteCard({
      id: data.id,
      boardId
    });
  }

  return (
    <div className='mt-2 space-y-2'>
      <p className='text-xs font-semibold'>
        Actions
      </p>
      {/* Buttons */}
      <Button
        onClick={onCopy}
        disabled={isLoadingCopy}
        variant='card-action'
        size='inline'
        className='w-full justify-start'
      >
        <Copy className='h-4 w-4 mr-2' />
        Copy
      </Button>
      <Button
        onClick={onDelete}
        disabled={isLoadingDelete}
        variant='card-action'
        size='inline'
        className='w-full justify-start'
      >
        <Trash className='h-4 w-4 mr-2' />
        Delete
      </Button>
    </div>
  )
}

Actions.Skeleton = function ActionsSkeleton() {
  return (
    <div className='mt-2 space-y-2'>
      <Skeleton className='w-20 h-4 bg-neutral-200' />
      <Skeleton className='w-full h-8 bg-neutral-200' />
      <Skeleton className='w-full h-8 bg-neutral-200' />
    </div>
  )
}