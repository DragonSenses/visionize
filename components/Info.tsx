"use client";

import React from 'react';
import Image from 'next/image';
import { useOrganization } from '@clerk/nextjs';
import { CreditCard } from 'lucide-react';

export default function Info() {
  const { organization, isLoaded } = useOrganization();

  if (!isLoaded) {
    return (
      <p>Loading...</p>
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
        <div className='flex items-center text-xs text-muted-foreground'>
          <CreditCard />
          Free
        </div>
      </div>
    </div>
  )
}
