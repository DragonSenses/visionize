"use client";

import React, { ElementRef, useRef, useState } from 'react';
import { Layout } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { CardWithList } from '@/types/types';
import FormInput from '@/components/form/FormInput';
import { Skeleton } from '@/components/ui/skeleton';

import { useServerAction } from '@/hooks/useServerAction';
import { updateCard } from '@/actions/updateCard';

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

  const { executeServerAction: executeUpdateCard } = useServerAction(updateCard, {
    onSuccess(data) {
      // Invalidate the relevant query in the query cache
      queryClient.invalidateQueries({
        queryKey: ["card", data.id]
      });

      queryClient.invalidateQueries({
        queryKey: ["card-logs", data.id]
      });

      // Display a success toast with the new title
      toast.success(`Renamed to "${data.title}`);
      
      // Update the local state with the new title
      setTitle(data.title);
    },
    onError(error) {
      toast.error(error);
    },
  });

  /**
   * Handles the onBlur event for the input field.
   * When the input field loses focus, this function triggers form submission.
   */
  function onBlur(): void {
    inputRef.current?.form?.requestSubmit();
  }

  /**
   * Handles form submission in the Header component.
   * @param formData - The form data containing input values.
   */
  function onSubmit(formData: FormData): void {
    const title = formData.get("title") as string;
    const boardId = params.boardId as string;

    if (title === data.title) {
      return;
    }

    executeUpdateCard({
      title,
      boardId,
      id: data.id,
    });
  }

  return (
    <div className='flex items-start gap-x-3 mb-6 w-full' >
      <Layout className='h-5 w-5 mt-1 text-neutral-700' />
      <div className='w-full'>
        <form action={onSubmit}>
          <FormInput
            ref={inputRef}
            onBlur={onBlur}
            id='title'
            defaultValue={title}
            className='relative px-1 -left-1.5 w-[95%] text-xl text-neutral-700 font-semibold bg-transparent border-transparent focus-visible:bg-white focus-visible:border-input mb-0.5 truncate'
          />
        </form>
        <p className='text-sm text-muted-foreground'>
          in list <span className='underline'>{data.list.title}</span>
        </p>
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