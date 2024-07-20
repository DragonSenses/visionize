import React, { Suspense } from 'react';
import { auth } from '@clerk/nextjs/server';

import ActivityList from '@/components/ActivityList';
import Info from '@/components/Info';
import { Separator } from '@/components/ui/separator';
import { checkSubscription } from '@/lib/checkSubscription';

export default async function ActivityPage() {
  const { orgId } = auth();

  // Ensure orgId is a string
  const orgIdString = Array.isArray(orgId) ? orgId[0] : orgId;

  const isSubscribed = await checkSubscription(orgIdString);
  
  return (
    <div className='w-full'>
      <Info isSubscribed={isSubscribed}/>
      <Separator className='my-2' />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  )
}
