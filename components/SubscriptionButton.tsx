"use client";

import React from 'react';
import { toast } from 'sonner';

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
  const { executeServerAction, isLoading } = useServerAction(redirectCheckout, {
    onSuccess(data) {
      // Redirect to the checkout URL on success
      window.location.href = data;
    },
    onError(error) {
      // Show an error toast on failure
      toast.error(error);
    },
  });

  function handleSubscriptionButtonClick() {
    if (isSubscribed) {
      // Redirect to checkout URL if subscribed
      executeServerAction({});
    } else {
      // Otherwise open the upgrade modal for free members
      upgradeModal.onOpen();
    }
  }

  return (
    <Button>
      SubscriptionButton
    </Button>
  )
}
