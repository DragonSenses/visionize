import React from 'react';
import { auth } from '@clerk/nextjs';

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();

  async function create(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;

    await database.board.create({
      data: {
        title,
      },
    });
  }

  return (
    <div>
      <form action={create}>
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