"use client";

import React from 'react';
import { Plus } from 'lucide-react';

import ListWrapper from './ListWrapper';

export default function ListForm() {
  return (
    <ListWrapper>
      <button>
        <Plus />
        Add list
      </button>
    </ListWrapper>
  )
}
