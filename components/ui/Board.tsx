import React from 'react';

interface BoardProps {
  id: string;
  title: string;
};

export default function Board({
  id,
  title,
}: BoardProps) {
  return (
    <div>
      {title}
      {id}
    </div>
  )
}
