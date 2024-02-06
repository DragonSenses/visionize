import React from 'react';
import { auth } from '@clerk/nextjs';
import createBoard from '@/actions/createBoard';
import { Button } from '@/components/ui/button';

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
      <Button type='submit'>
        Submit
      </Button>
    </div>
  );
};

export default OrganizationIdPage