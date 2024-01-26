import React from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import Organization from '@/types/organization';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface SidebarItemProps {
  isActive: boolean;
  isOpen: boolean;
  onOpen: (id: string) => void;
  organization: Organization;
}

export default function SidebarItem({
  isActive,
  isOpen,
  onOpen,
  organization,
}: SidebarItemProps ) {
  return (
    <AccordionItem
      value={organization.id}
      className='border-none'
    >
      <AccordionTrigger
        onClick={() => onOpen(organization.id)}
        className={cn()}
      >
        <div className=''>
          <div className=''>
            <Image 
            />
          </div>
          <span className=''>
            {organization.name}
          </span>
        </div>
      </AccordionTrigger>
    </AccordionItem>
  )
}
