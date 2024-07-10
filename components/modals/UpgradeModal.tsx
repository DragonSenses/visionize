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
        <div className='mx-auto p-6 space-y-6 text-neutral-700'>
          <h2 className='font-semibold text-xl'>
            Upgrade to Visionize Pro.
          </h2>
          <p className='text-xs font-semibold text-neutral-600'>
            Discover the finest offerings of Visionize. 
          </p>
          <div className='pl-3'>
            {/* Promotional features of Visionize Pro */}
            <ul className='text-sm list-disc'>
              <li>Unlimited boards</li>
              <li>Enhanced security</li>
              <li>Premium checklists</li>
              <li>Support Vision-chan!</li>
              <li>And more upcoming features...</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
