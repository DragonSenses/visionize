import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { database } from '@/lib/database';
import ActivityItem from '@/components/ActivityItem';
import { Skeleton } from '@/components/ui/skeleton';

export default async function ActivityList() {
  // Authenticate the user's organization
  const { orgId } = auth();

  if (!orgId) {
    return redirect('/org-selection');
  }

  // Fetch the audit logs data from the database in descending order
  const auditLogs = await database.auditLog.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <ol className='space-y-4 mt-4'>
      <p className='hidden last:block text-xs text-center text-muted-foreground'>
        No activity found inside this organization.
      </p>
      {auditLogs.map((log) => (
        <ActivityItem
          data={log}
          key={log.id}
        />
      ))}
    </ol>
  )
}

ActivityList.Skeleton = function ActivityListSkeleton() {
  return (
    <ol className='space-y-4 mt-4'>
      <Skeleton className='w-[80%] h-14' />
      <Skeleton className='w-[80%] h-14' />
      <Skeleton className='w-[80%] h-14' />
      <Skeleton className='w-[80%] h-14' />
      <Skeleton className='w-[80%] h-14' />
      <Skeleton className='w-[80%] h-14' />
      <Skeleton className='w-[80%] h-14' />
    </ol>
  )
}