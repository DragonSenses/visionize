"use client";

import React from 'react';

import { useUpgradeModal } from '@/hooks/useUpgradeModal';
import { Button } from '@/components/ui/button';

interface SubscriptionButtonProps {
  isSubscribed: boolean;
}

export default function SubscriptionButton({
  isSubscribed,
}: SubscriptionButtonProps) {
  
  // Access the upgrade modal state and actions
  const upgradeModal = useUpgradeModal();

  return (
    <Button>
      SubscriptionButton
    </Button>
  )
}
