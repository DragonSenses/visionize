import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { database } from '@/lib/database';

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
    <div>ActivityList</div>
  )
}
