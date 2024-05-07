"use client";

import React, { ElementRef, useRef, useState } from 'react';
import { AlignLeft } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

import { CardWithList } from '@/types/types';
import { Skeleton } from '@/components/ui/skeleton';

interface DescriptionProps {
  data: CardWithList
}

export default function Description({
  data
}: DescriptionProps) {
  const params = useParams();
  const queryClient = useQueryClient();

  const [isEditing, setIsEditing] = useState(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const textAreaRef = useRef<ElementRef<"textarea">>(null);

  /**
   * Enables editing mode and focus input.
   */
  function enableEditing() {
    setIsEditing(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    });
  }

  /**
   * Disables editing mode.
   */
  function disableEditing() {
    setIsEditing(false);
  }

  /**
   * When user clicks "Escape" key, it disables editing mode.
   * @param event the key press event
   */
  function handleEscapeKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      disableEditing();
    }
  }

  return (
    <div className='flex items-start gap-x-3 w-full'>
      <AlignLeft className='h-5 w-5 mt-0.5 text-neutral-700' />
      <div className='w-full'>
        <p className='mb-2 font-semibold text-neutral-700'>
          Description
        </p>
        <div
          role="button"
          className='min-h-[78px] px-3.5 py-3 rounded-md bg-neutral-200 text-sm font-medium'
        >
          {data.description || "Add a description..."}
        </div>
      </div>
      {data.description}
    </div>
  )
}

Description.Skeleton = function DescriptionSkeleton() {
  return (
    <div className='flex items-start gap-x-3 w-full'>
      <Skeleton className='h-6 w-6 bg-neutral-200' />
      <div className='w-full'>
        <Skeleton className='h-6 w-24 mb-2 bg-neutral-200' />
        <Skeleton className='h-[78px] w-full mb-2 bg-neutral-200' />
      </div>
    </div>
  )
}