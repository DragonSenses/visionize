"use client";

// Import necessary dependencies
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Import the reusable data fetcher
import { fetcher } from '@/lib/fetcher';

// Import custom union type
import { CardWithList } from '@/types/types';

// Import AuditLog type
import { AuditLog } from '@prisma/client';

// Import custom hook for managing card modal state
import { useCardModal } from '@/hooks/useCardModal';

// Import UI components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import Header from './Header';
import Description from './Description';
import Actions from './Actions';
import Activity from './Activity';

export default function CardModal() {
  // Get the card ID, modal state, and close function from the custom hook
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  // Fetch card data using the useQuery hook
  const { data: cardData } = useQuery<CardWithList>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${ id }`),
  });

  // Fetch audit log data using the useQuery hook
  const { data: auditLogsData } = useQuery<AuditLog[]>({
    queryKey: ["card-logs", id],
    queryFn: () => fetcher(`/api/cards/${ id }/logs`),
  });

  // Render the dialog with the card content
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        {!cardData
          ? <Header.Skeleton />
          : <Header data={cardData} />
        }
        {/* Responsive grid for card description and actions */}
        <div className='grid grid-cols-1 md:grid-cols-4 md:gap-4'>
          <div className='col-span-3'>
            <div className='w-full space-y-6'>
              {/* Card Description */}
              {!cardData
                ? <Description.Skeleton />
                : <Description data={cardData} />
              }
              {/* Card Activity */}
              {!auditLogsData
                ? <Activity.Skeleton />
                : <Activity data={auditLogsData} />
              }
            </div>
          </div>
          {/* Card Actions */}
          {!cardData
            ? <Actions.Skeleton />
            : <Actions data={cardData} />
          }
        </div>
      </DialogContent>
    </Dialog>
  )
}
