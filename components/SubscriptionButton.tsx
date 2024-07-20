"use client";

import React from 'react';

import { redirectCheckout } from '@/actions/redirectCheckout';
import { useServerAction } from '@/hooks/useServerAction';
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

   // Use the server action hook with the redirectCheckout action
   const { executeServerAction, isLoading } = useServerAction(redirectCheckout);

  return (
    <Button>
      SubscriptionButton
    </Button>
  )
}
