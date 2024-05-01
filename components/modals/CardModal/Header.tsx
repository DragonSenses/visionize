"use client";

import React, { useState } from 'react';
import { Layout } from 'lucide-react';

import { CardWithList } from '@/types/types';
import FormInput from '@/components/form/FormInput';

interface HeaderProps {
  data: CardWithList;
}

export default function Header({
  data,
}: HeaderProps) {
  const [title, setTitle] = useState(data?.title);

  return (
    <div className='flex items-start gap-x-3 mb-6 w-full' >
      <Layout className='h-5 w-5 mt-1 text-neutral-700' />
      <div className='w-full'>
        <form>
          <FormInput
            id='title'
            defaultValue={title}
            className='relative px-1 -left-1.5 w-[95%] text-xl text-neutral-700 font-semibold bg-transparent border-transparent focus-visible:bg-white focus-visible:border-input mb-0.5 truncate'
          />
        </form>
      </div>
    </div>
  )
}
