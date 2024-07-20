"use client";

import React from 'react';

import { Button } from '@/components/ui/button';

interface SubscriptionButtonProps {
  isSubscribed: boolean;
}

export default function SubscriptionButton({
  isSubscribed,
}: SubscriptionButtonProps) {

  return (
    <Button>
      SubscriptionButton
    </Button>
  )
}
