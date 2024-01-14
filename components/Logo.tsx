import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';
import React from 'react';

import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
});

const Logo = () => {
  return (
    <Link href="/">
      <div className='hover:opacity-75 transition items-center gap-x-2 hidden md:flex'>
        <Image 
          src='/logo.svg'
          alt='Logo for Visionize'
          height={30}
          width={30}
        />
        <p className={cn(
          'text-xl text-neutral-700 px-1 pt-1',
          headingFont.className,
        )}>
          Visionize
        </p>
      </div>
    </Link>
  )
}

export default Logo