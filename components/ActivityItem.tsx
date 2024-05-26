import React from 'react';
import { AuditLog } from '@prisma/client';

import { generateLogMessage } from '@/lib/generateLogMessage';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

interface ActivityItemProps {
  data: AuditLog;
}

export default function ActivityItem({
  data
}: ActivityItemProps) {
  return (
    <li>
      <Avatar>
        <AvatarImage src={data.userImage} />
      </Avatar>
      <div>
        <p>
          <span>
            {data.userName}
          </span> {generateLogMessage(data)}
        </p>
      </div>
    </li>
  )
}