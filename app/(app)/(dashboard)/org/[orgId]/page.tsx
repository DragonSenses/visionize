import React from 'react';
import { auth } from '@clerk/nextjs';
import createBoard from '@/actions/createBoard';
import { Button } from '@/components/ui/button';
import { database } from '@/lib/database';
import Board from '@/components/ui/Board';

const OrganizationIdPage = async () => {
  // Fetch the boards from the database
  const boards = await database.board.findMany();

  return (
    <div className='flex flex-col space-y-4'>
      {/* Create a form for creating a new board */}
      <form action={createBoard}>
        <input
          id='title'
          name='title'
          placeholder='Enter a board title'
          required
          className='border-black border p-1'
        />
      </form>
      {/* Submit Button */}
      <Button type='submit'>
        Submit
      </Button>
      {/* Create a div for displaying the boards */}
      <div className='space-y-2'>
        {/* Map over the boards and render a Board component for each one */}
        {boards.map((board) => (
          <Board
            key={board.id}
            id={board.id}
            title={board.title}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage