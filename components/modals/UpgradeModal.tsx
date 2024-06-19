"use client";

import React from 'react';

import { useUpgradeModal } from '@/hooks/useUpgradeModal';

export default function UpgradeModal() {
  // Access the upgrade modal state and functions
  const upgradeModal = useUpgradeModal();

  return (
    <div>UpgradeModal</div>
  )
}
