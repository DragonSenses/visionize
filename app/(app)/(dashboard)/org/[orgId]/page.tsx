import React from 'react';
import { auth } from '@clerk/nextjs';
import createBoard from '@/actions/createBoard';
import { Button } from '@/components/ui/button';
import { database } from '@/lib/database';

const OrganizationIdPage = async () => {
  const boards = await database.board.findMany();

  return (
    <div className='flex flex-col space-y-4'>
      <form action={createBoard}>
        <input 
          id='title'
          name='title'
          placeholder='Enter a board title'
          required
          className='border-black border p-1'
        />
      </form>
      <Button type='submit'>
        Submit
      </Button>
      <div className='space-y-2'>
        {boards.map((board) => (
          <div key={board.id}>
            {board.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage