"use client";

import React from 'react';
import Image from 'next/image';

import { useUpgradeModal } from '@/hooks/useUpgradeModal';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function UpgradeModal() {
  // Access the upgrade modal state and functions
  const upgradeModal = useUpgradeModal();

  return (
    <Dialog
      open={upgradeModal.isOpen}
      onOpenChange={upgradeModal.onClose}
    >
      <DialogContent
        className='max-w-md p-0 overflow-hidden'
      >
        <div className='relative flex items-center justify-center aspect-video'>
          <Image
            src='/hero.jpg'
            alt='Hero image'
            className='object-cover'
            fill
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
