"use client";

import React from 'react';
import Image from 'next/image';
import { useOrganization } from '@clerk/nextjs';
import { CreditCard } from 'lucide-react';

import { Skeleton } from '@/components/ui/skeleton';

export default function Info() {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return (
      <Info.Skeleton />
    )
  }

  return (
    <div className='flex items-center gap-x-4'>
      {/* Image container */}
      <div className='relative w-[60px] h-[60px]'>
        <Image
          fill
          src={organization?.imageUrl ?? '/logo.svg'}
          alt="organization image"
          className='rounded-md object-cover'
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 30vw, 25vw"
        />
      </div>
      {/* Organization Info */}
      <div className='space-y-1'>
        <p className='font-semibold text-xl'>
          {organization?.name}
        </p>
        {/* Premium or Free info is dynamically rendered */}
        <div className='flex items-center text-xs text-muted-foreground gap-1'>
          <CreditCard />
          <span>Free</span>
        </div>
      </div>
    </div>
  )
}

/**
 * Shows a placeholder preview of the content before it fully loads. Improves
 * user experience by showing a layout & structure of the component content,
 * but withoout the details. Reduces the perceived loading time and keeps the
 * user engaged.
 * 
 * Uses React syntax to define a static property on the Info component and 
 * assign the function component which renders the skeleton.
 * @returns the skeleton of the Info component
 */
Info.Skeleton = function InfoSkeleton() {
  return (
    <div className='flex items-center gap-x-4'>
      {/* Image container */}
      <div className='relative w-[60px] h-[60px]'>
        <Skeleton className='absolute w-full h-full' />
      </div>
      {/* Organization Info */}
      <div className='space-y-2'>
        <Skeleton className='h-10 w-[200px]' />
        <div className='flex items-center'>
          <Skeleton className='h-4 w-4 mr-2' />
          <Skeleton className='h-4 w-[100px]' />
        </div>
      </div>
    </div>
  )
}