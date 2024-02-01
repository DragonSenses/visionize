"use client";

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { useMobileSidebar } from '@/hooks/useMobileSidebar';

export default function MobileSidebar() {
  // Get the current path of the page
  const pathname = usePathname();

  /* These values are used to control the visibility and behavior 
  of the mobile sidebar component */
  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);

  return (
    <div>MobileSidebar</div>
  )
}
