import React from 'react';
import { database } from '@/lib/database';
import Board from '@/components/Board';
import BoardForm from '@/components/BoardForm';

const OrganizationIdPage = async () => {
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

export default OrganizationIdPage