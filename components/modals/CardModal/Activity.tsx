"use client";

import React from 'react';
import { AuditLog } from '@prisma/client';

import { Skeleton } from '@/components/ui/skeleton';
import { ActivityIcon } from 'lucide-react';

interface ActivityProps {
  data: AuditLog[];
}

export default function Activity({
  data,
}: AuditLog) {
  return (
    <div>
      <ActivityIcon/>
      <div>
        <p>
          Activity
        </p>
        <ol>
          {data.map((auditLog: AuditLog) => (
            <p key={auditLog.id}>{auditLog.entityTitle}</p>
          ))}
        </ol>
      </div>
    </div>
  )
}

Activity.Skeleton = function ActivitySkeleton() {
  return (
    <div className='flex items-start gap-x-3 w-full'>
      <Skeleton className='h-6 w-6 bg-neutral-200' />
      <div className='w-full'>
        <Skeleton className='w-24 h-6 mb-2 bg-neutral-200' />
        <Skeleton className='w-full h-10 bg-neutral-200' />
      </div>
    </div>
  )
}