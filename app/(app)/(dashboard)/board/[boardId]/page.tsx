import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
};
export default async function BoardIdPage({
  params
}: BoardIdPageProps) {
  const { orgId } = auth();

  if (!orgId) {
    return redirect('/org-selection');
  }

  return (
    <div>
      BoardIdPage
    </div>
  )
}
