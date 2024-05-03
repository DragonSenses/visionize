"use client";

import React, { ElementRef, useRef, useState } from 'react';
import { Layout } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';

import { CardWithList } from '@/types/types';
import FormInput from '@/components/form/FormInput';
import { Skeleton } from '@/components/ui/skeleton';

interface HeaderProps {
  data: CardWithList;
}

export default function Header({
  data,
}: HeaderProps) {
  const params = useParams();
  const queryClient = useQueryClient();
  const inputRef = useRef<ElementRef<"input">>(null);
  const [title, setTitle] = useState(data.title);

  /**
   * Handles the onBlur event for the input field.
   * When the input field loses focus, this function triggers form submission.
   */
  function onBlur(): void {
    inputRef.current?.form?.requestSubmit();
  }

  return (
    <div className='flex items-start gap-x-3 mb-6 w-full' >
      <Layout className='h-5 w-5 mt-1 text-neutral-700' />
      <div className='w-full'>
        <form>
          <FormInput
            ref={inputRef}
            onBlur={onBlur}
            id='title'
            defaultValue={title}
            className='relative px-1 -left-1.5 w-[95%] text-xl text-neutral-700 font-semibold bg-transparent border-transparent focus-visible:bg-white focus-visible:border-input mb-0.5 truncate'
          />
        </form>
      </div>
    </div>
  )
}

Header.Skeleton = function HeaderSkeleton() {
  return (
    <div className='flex items-start gap-x-3 mb-6 w-full' >
      <Skeleton className='h-6 w-6 mt-1 bg-neutral-200' />
      <div>
        <Skeleton className='w-24 h-6  bg-neutral-200' />
        <Skeleton className='w-12 h-4 bg-neutral-200' />
      </div>
    </div>
  )
}