import React from 'react';
import { AuditLog } from '@prisma/client';
import { format } from 'date-fns';

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
        <p>
          {format(new Date(data.createdAt), "MMM d, yyyy 'at' h:mm a")}
        </p>
      </div>
    </li>
  )
}