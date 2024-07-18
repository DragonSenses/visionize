import React from 'react';
import { useParams } from 'next/navigation';

import { checkSubscription } from '@/lib/checkSubscription';
import Info from '@/components/Info';

export default async function BillingPage() {
  const { orgId } = useParams();

  // Ensure orgId is a string
  const orgIdString = Array.isArray(orgId) ? orgId[0] : orgId;

  const isSubscribed = await checkSubscription(orgIdString);
  
  return (
    <div className='w-full'>
      <Info isSubscribed={isSubscribed}/>
    </div>
  )
}
