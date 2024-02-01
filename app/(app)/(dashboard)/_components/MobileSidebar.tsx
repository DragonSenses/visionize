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

    // Declare isMounted state variable and initialize it to false
    const [isMounted, setIsMounted] = useState(false);

    // useEffect hook to set isMounted variable to true
    // Delays the execution of client-side-only code until after hydration
    useEffect(() => {
      setIsMounted(true);
    }, []); // Only run once after the initial render
  
    // Prevent rendering of the component before the effect has run
    // To protect from hydration errors or unwanted flashes of content
    if (!isMounted) {
      return null;
    }

  return (
    <div>MobileSidebar</div>
  )
}
