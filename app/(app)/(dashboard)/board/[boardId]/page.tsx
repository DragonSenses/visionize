import React from 'react';

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
};
export default async function BoardIdPage({
  params
}: BoardIdPageProps) {


  return (
    <div>
      BoardIdPage
    </div>
  )
}
