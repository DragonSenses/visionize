import React from 'react';

import ActivityList from '@/components/ActivityList';
import Info from '@/components/Info';
import { Separator } from '@/components/ui/separator';

export default function ActivityPage() {
  return (
    <div className='w-full'>
      <Info />
      <Separator className='my-2'/>
      <ActivityList />
    </div>
  )
}
