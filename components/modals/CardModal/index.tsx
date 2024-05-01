"use client";

// Import necessary dependencies
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Import UI components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// Import the reusable data fetcher
import { fetcher } from '@/lib/fetcher';

// Import custom union type
import { CardWithList } from '@/types/types';

// Import custom hook for managing card modal state
import { useCardModal } from '@/hooks/useCardModal';

export default function CardModal() {
  // Get the card ID, modal state, and close function from the custom hook
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  // Fetch card data using the useQuery hook
  const {data: cardData } = useQuery<CardWithList>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${id}`),
  });

  // Render the dialog with the card content
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        CardModal
      </DialogContent>
    </Dialog>
  )
}
