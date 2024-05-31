import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function ActivityList() {
  const { orgId } = auth();

  if (!orgId) {
    return redirect('/org-selection');
  }

  return (
    <div>ActivityList</div>
  )
}
