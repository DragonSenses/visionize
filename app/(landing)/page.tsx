import React from 'react';
import Link from 'next/link';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import { ClipboardCheck, KanbanSquare } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: "../../public/fonts/CalSans-SemiBold.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

let g0 = 'bg-gradient-to-r from-fuchsia-600 to-pink-600';
// beam of light
let g1 = 'bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900';
// arendelle
let g2 = 'bg-gradient-to-l from-blue-200 via-blue-300 to-blue-500';
// huckleberry
let g3 = 'bg-gradient-to-l from-purple-200 via-purple-400 to-purple-800';
// sky
let g4 = 'bg-gradient-to-r from-sky-400 to-sky-200';
// lavender
let g5 = 'bg-gradient-to-l from-indigo-300 to-purple-400';

let g6 = 'bg-gradient-to-l from-gray-200 via-gray-400 to-gray-600';

// Array of gradient colors to choose from to use for the heading
let gradient = [g0, g1, g2, g3, g4, g5, g6];

export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className={cn(
        'flex items-center justify-center flex-col',
        headingFont.className,
        )}>
        {/* Icon Container */}
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <KanbanSquare className='h-6 w-6 mr-2'/>
          <span className='pt-1'>Kanban your way</span>
          <ClipboardCheck className='h-6 w-6 mx-2'/>
        </div>
        {/* Headings */}
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
          <span className='mr-1'><strong>Visionize</strong></span> your tasks
        </h1>
        <div className={cn('text-2xl md:text-6xl text-white p-3 md:p-4 rounded-md w-fit',
        gradient[2],
        )}>
          Turn your vision into reality. 
        </div>
      </div>
      {/* Promotional Text */}
      <div className={cn(
        'text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto',
        textFont.className,
      )}>
        Fight mediocrity with Visionize. With just boards, lists and cards you can 
        get a clear overview of your tasks. Then you can plan, prioritize, and
        execute your goals with confidence.      
        You can drag and drop tasks, add labels and due dates, attach files 
        and comments, and more.
      </div>
      {/* Sign-Up Link */}
      <Button className='mt-6' size='lg' asChild>
        <Link href="/sign-up">
          Try Visionize for free
        </Link>
      </Button>
    </div>
  )
}

