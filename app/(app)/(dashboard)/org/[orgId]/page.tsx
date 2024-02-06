import React from 'react';
import { auth } from '@clerk/nextjs';
import createBoard from '@/actions/createBoard';

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();

  return (
    <div>
      <form action={createBoard}>
        <input 
          id='title'
          name='title'
          placeholder='Enter a board title'
          required
          className='border-black border p-1'
        />
      </form>
    </div>
  );
};

export default OrganizationIdPage