"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { useMobileSidebar } from '@/hooks/useMobileSidebar';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
} from '@/components/ui/sheet';
import Sidebar from './Sidebar';

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
  
  // Every time the pathname changes, close the MobileSidebar
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Prevent rendering of the component before the effect has run
  // To protect from hydration errors or unwanted flashes of content
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className='block md:hidden'
        variant='ghost'
        size='sm'
      >
        <Menu className='h-4 w-4'/>
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side='left'
          className='p-2 pt-10'
        >
          <Sidebar
            storageKey="mobileSidebarState"
          />
        </SheetContent>
      </Sheet>
    </>
  )
}
