"use client";

import Link from 'next/link';
import React from 'react'
import { Plus } from 'lucide-react';
import { useLocalStorage } from 'usehooks-ts';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';

import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

interface SidebarProps {
  storageKey?: string;
};

export default function Sidebar({
  storageKey = "sidebarState",
}: SidebarProps ) {
  const [open, setOpen] = useLocalStorage<Record<string, any>>(
    storageKey, 
    {}
  );

  return (
    <div>
      Sidebar
    </div>  
  );
};
