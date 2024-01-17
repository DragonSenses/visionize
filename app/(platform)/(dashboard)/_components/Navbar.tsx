import React from 'react';
import { Plus } from 'lucide-react';

import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <nav className='flex items-center fixed px-4 z-10 top-0 w-full h-14 border-b shadow-sm bg-white'>
      {/* Responsive Container */}
      <div className='flex items-center gap-x-4'>
        {/* For screens 768px and larger  */}
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <Button 
          size='sm' 
          className='rounded-sm py-1.5 px-2 h-auto'
        >
          <span className='hidden md:block'>Create</span>
          <Plus className='block pl-1 h-4 w-4'/>
        </Button>
      </div>
    </nav>
  );
};
