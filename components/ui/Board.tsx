import React from 'react';
import { Button } from '@/components/ui/button';

interface BoardProps {
  id: string;
  title: string;
};

export default function Board({
  id,
  title,
}: BoardProps) {
  return (
    <form className='flex items-center gap-x-2'>
      <p>{title}</p>
      <p>{id}</p>
      <Button 
        type="submit"
        variant="default"
        size="sm"
      >
        Update
      </Button>
      <Button 
        type="submit"
        variant="destructive"
        size="sm"
      >
        Delete
      </Button>
    </form>
  )
}
