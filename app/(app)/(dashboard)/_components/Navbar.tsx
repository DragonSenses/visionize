import React from 'react';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Plus } from 'lucide-react';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

import MobileSidebar from './MobileSidebar';

export const Navbar = () => {
  return (
    <nav className='flex items-center fixed px-4 z-10 top-0 w-full h-14 border-b shadow-sm bg-white'>
      <MobileSidebar />
      <div className='flex items-center gap-x-4'>
        {/* For screens 768px and larger  */}
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <Button
          variant='primary'
          size='sm' 
          className='rounded-sm py-1.5 px-2 h-auto'
        >
          <span className='hidden md:block'>Create</span>
          <Plus className='block md:pl-1 h-4 w-4'/>
        </Button>
      </div>
      <div className='ml-auto flex items-center gap-x-2'>
        <OrganizationSwitcher 
          afterCreateOrganizationUrl='/org/:id'
          afterLeaveOrganizationUrl='/org-selection'
          afterSelectOrganizationUrl="/org/:id"
          afterSelectPersonalUrl='/user/:id'
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              },
            },
          }}
        />
        <UserButton 
          afterSignOutUrl='/'
          appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
          }}
        />
      </div>
    </nav>
  );
};
