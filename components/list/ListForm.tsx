"use client";

import React from 'react';
import { Plus } from 'lucide-react';

import ListWrapper from './ListWrapper';

export default function ListForm() {
  return (
    <ListWrapper>
      <button
        className='flex items-center w-full rounded-md p-3 font-medium text-sm bg-white/80 hover:bg-white/50 transition'
      >
        <Plus className='h-4 w-4 mr-2'/>
        Add list
      </button>
    </ListWrapper>
  )
}
