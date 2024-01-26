import React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Activity, CreditCard, Layout, Settings } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Organization from '@/types/Organization';

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
}: SidebarItemProps) {

  // Get router instance from useRouter hook to perform client-side navigation
  const router = useRouter();

  // Get current URL pathname from the usePathname hook
  const pathname = usePathname();

  const routes = [
    {
      displayName: "Boards",
      href: `/org/${organization.id}`,
      icon: <Layout className='h-4 w-4 mr-2' />,
    },
    {
      displayName: "Activity",
      href: `/org/${organization.id}`,
      icon: <Activity className='h-4 w-4 mr-2' />,
    },
    {
      displayName: "Settings",
      href: `/org/${organization.id}`,
      icon: <Settings className='h-4 w-4 mr-2' />,
    },
    {
      displayName: "Billing",
      href: `/org/${organization.id}`,
      icon: <CreditCard className='h-4 w-4 mr-2' />,
    },
  ];

  /**
   * Click handler that performs client-side navigation to the specified href.
   * @param href the URL link to navigate to
   */
  function navigateTo(href: string): void {
    router.push(href);
  }

  return (
    <AccordionItem
      value={organization.id}
      className='border-none'
    >
      <AccordionTrigger
        onClick={() => onOpen(organization.id)}
        className={cn()}
      >
        <div className='flex items-center gap-x-2'>
          <div className='relative w-7 h-7'>
            <Image
              fill
              src={organization.imageUrl}
              alt="organization image"
              className='rounded-sm object-cover'
            />
          </div>
          <span className='font-medium text-sm'>
            {organization.name}
          </span>
        </div>
      </AccordionTrigger>
    </AccordionItem>
  )
}
