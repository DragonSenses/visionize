"use client";

import Link from 'next/link';
import React from 'react'
import { Plus } from 'lucide-react';
import { useLocalStorage } from 'usehooks-ts';
import { useOrganization, useOrganizationList } from '@clerk/nextjs';

import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import SkeletonSidebar from '@/components/ui/SkeletonSidebar';
import SidebarItem from './SidebarItem';
import Organization from '@/types/Organization';

// Define an interface for the Sidebar component props
interface SidebarProps {
  // Optional prop to specify the storage key for the sidebar state
  storageKey?: string;
};

// Define the Sidebar component as a default export
export default function Sidebar({
  // Destructure the storageKey prop and assign a default value
  storageKey = "sidebarState",
}: SidebarProps) {

  // Use the useLocalStorage hook to store and retrieve the open state of the sidebar
  // The open state is an object that maps each accordion item key to a boolean value
  const [open, setOpen] = useLocalStorage<Record<string, any>>(
    storageKey,
    {} // Initial value is an empty object
  );

  // Use the useOrganization hook to get the active organization and its loading status
  // The active organization is the one that the user is currently viewing or managing
  const {
    organization: activeOrg,
    isLoaded: isLoadedOrg,
  } = useOrganization();

  // Use the useOrganizationList hook to get the user memberships and their loading status
  // The user memberships are the organizations that the user belongs to or has access to
  // The infinite option enables pagination and infinite scrolling for the organization list
  const {
    userMemberships,
    isLoaded: isLoadedOrgList,
  } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  // Define a variable to store the previous accordion value as an array of keys
  // Use the Object.keys method to get the keys of the open state object
  // Use the reduce method to filter out the keys that have a false value
  const prevAccordionValue: string[] = Object.keys(open)
    .reduce((accumulator: string[], key: string) => {
      // If the value of the key is true, add it to the accumulator array
      if (open[key]) {
        accumulator.push(key);
      }

      // Return the accumulator array
      return accumulator;
    }, [])

  /**
   * Toggles the open state of an accordion item by its id
   * Use the setOpen function to update the open state object
   * Use the spread operator to copy the current open state and 
   * update the id key with the opposite value
   * @param id the id of the accordion item
   */
  function onOpen(id: string) {
    setOpen((current) => ({
      ...current,
      [id]: !open[id],
    }));
  };

  // Check if the organization data and the user memberships data are loaded
  // If any of them is not loaded or is loading, return a SkeletonSidebar
  // The SkeletonSidebar is a placeholder that shows the loading progress
  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <SkeletonSidebar />
    )
  }

  // Return the JSX for the sidebar component
  return (
    <>
      <div className='flex items-center mb-1 font-medium text-xs'>
        <span className='text-base pl-4'>
          Workspaces
        </span>
        <Button
          asChild
          className='ml-1'
          size='icon'
          type='button'
          variant='ghost'
        >
          <Link href='/org-selection'>
            <Plus
              className='h-4 w-4'
            />
          </Link>
        </Button>
      </div>
      <Accordion
        type='multiple'
        defaultValue={prevAccordionValue}
        className='space-y-2'
      >
        {userMemberships.data.map(({ organization }) => (
          <SidebarItem
            key={organization.id}
            isActive={activeOrg?.id === organization.id}
            isOpen={open[organization.id]}
            onOpen={onOpen}
            organization={organization as Organization}
          />
        ))}
      </Accordion>
    </>
  );
};
