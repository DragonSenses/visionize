import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { database } from '@/lib/database';
import ActivityItem from './ActivityItem';

export default async function ActivityList() {
  // Authenticate the user's organization
  const { orgId } = auth();

  if (!orgId) {
    return redirect('/org-selection');
  }

  // Fetch the audit logs data from the database
  const auditLogs = await database.auditLog.findMany({
    where: {
      orgId,
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
