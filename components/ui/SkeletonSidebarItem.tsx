import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * A skeleton component is a UI element that shows a placeholder for 
 * the expected shape of a SidebarItem component while it is loading.
 * @returns A placeholder for the expected shape of a SidebarItem component
 */
export default function SkeletonSidebarItem() {
  return (
    <div className="flex items-center gap-x-2">
      {/* Skeleton for the Image component of SidebarItem */}
      <div className="w-10 h-10 relative shrink-0">
        <Skeleton className='h-full w-full absolute'/>
      </div>
      {/* Skeleton for the Accordion component of SidebarItem */}
      <Skeleton className='h-10 w-full'/>
    </div>
  );
};
