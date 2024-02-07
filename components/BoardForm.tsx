"use client";

import React from 'react';

import createBoard from '@/actions/createBoard';
import { Button } from '@/components/ui/button';

/* Create a form for creating a new board */
export default function BoardForm() {
  return (
    <form action={createBoard}>
      <input
        id='title'
        name='title'
        placeholder='Enter a board title'
        required
        className='border-black border p-1'
      />
      <Button type='submit'>
        Submit
      </Button>
    </form>
  )
}
