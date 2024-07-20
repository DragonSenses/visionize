import React from 'react';
import { auth } from '@clerk/nextjs/server';

import { checkSubscription } from '@/lib/checkSubscription';
import Info from '@/components/Info';
import { Separator } from '@/components/ui/separator';

export default async function BillingPage() {
  const { orgId } = auth();

  // Ensure orgId is a string
  const orgIdString = Array.isArray(orgId) ? orgId[0] : orgId;

  const isSubscribed = await checkSubscription(orgIdString);

  return (
    <div className='w-full'>
      <Info isSubscribed={isSubscribed} />
      <Separator className='my-2' />
      
    </div>
  )
}
