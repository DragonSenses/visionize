import React from 'react';
import { AuditLog } from '@prisma/client';

interface ActivityItemProps {
  data: AuditLog;
}

export default function ActivityItem({
  data
}: ActivityItemProps) {
  return (
    <div>ActivityItem</div>
  )
}