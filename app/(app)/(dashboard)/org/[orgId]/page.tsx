import React, { Suspense } from 'react';
import { useParams } from 'next/navigation';

import BoardList from '@/components/BoardList';
import Info from '@/components/Info';
import { Separator } from '@/components/ui/separator';
import { checkSubscription } from '@/lib/checkSubscription';

const OrganizationIdPage = async () => {
  const { orgId } = useParams();

  // Ensure orgId is a string
  const orgIdString = Array.isArray(orgId) ? orgId[0] : orgId;

  const isSubscribed = await checkSubscription(orgIdString);

  return (
    <div className='flex flex-col w-full mb-20'>
      <Info isSubscribed={isSubscribed}/>
      <Separator className='my-4' />
      <div className='px-2 md:px-4'>
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage