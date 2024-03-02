import React from 'react';

import { database } from '@/lib/database';
import Board from '@/components/_old/Board';
import BoardForm from '@/components/_old/BoardForm';

export default async function UserIdPage () {
  // Fetch the boards from the database
  const boards = await database.board.findMany();

  return (
    <div className='flex flex-col space-y-4'>
      <BoardForm />
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
