import React from 'react';

import deleteBoard from '@/actions/deleteBoard';
import updateBoard from '@/actions/updateBoard';
import { Button } from '@/components/ui/button';
import BoardFormButton from '@/components/_old/BoardFormButton';

interface BoardProps {
  id: string;
  title: string;
};

interface BoardData {
  title: string;
};

export default function Board({
  id,
  title,
}: BoardProps) {

  const handleDelete = async () => {
    console.log('Deleting board with id:', id);
    await deleteBoard(id);
  };

  const handleUpdate = async () => {
    console.log('Updating board with id:', id);
    const data = { title: "updated_title" };
    await updateBoard(id, data);
  };

  return (
    <form className='flex items-center gap-x-2'>
      <p>{title}</p>
      <p>{id}</p>
      <Button
        type="submit"
        variant="default"
        size="sm"
        onClick={handleUpdate}
      >
        Update
      </Button>

      <BoardFormButton
        type="submit"
        variant="destructive"
        size="sm"
        onClick={handleDelete}
      >
        Delete
      </BoardFormButton>
      
    </form>
  )
}
