"use client";

import React, { useEffect, useState } from 'react';

import CardModal from '@/components/modals/CardModal';
import UpgradeModal from '@/components/modals/UpgradeModal';

export default function ModalProvider() {
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
    <>
      <CardModal />
      <UpgradeModal />
    </>
  )
}
