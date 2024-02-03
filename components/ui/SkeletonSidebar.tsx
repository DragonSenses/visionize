import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import SkeletonSidebarItem from '@/components/ui/SkeletonSidebarItem';

/**
 * A skeleton component is a UI element that shows a placeholder for 
 * the expected shape of a Sidebar component while it is loading.
 * @returns A placeholder for the expected shape of a Sidebar
 */
export default function SkeletonSidebar() {
  return (
    <div className='flex items-center justify-between mb-2'>
      {/* Skeleton for the Workspace text and Button */}
      <Skeleton className='h-10 w-[60%]' />
      {/* Skeleton for the Sidebar item list */}
      <div className='space-y-2'>
        <SkeletonSidebarItem />
        <SkeletonSidebarItem />
        <SkeletonSidebarItem />
      </div>
    </div>
  )
}
