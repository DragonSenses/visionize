import React from 'react';
import { Button } from '@/components/ui/button';
import deleteBoard from '@/actions/deleteBoard';
import updateBoard from '@/actions/updateBoard';

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
    const data = { title: "updated_title"};
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
      <Button 
        type="submit"
        variant="destructive"
        size="sm"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </form>
  )
}
