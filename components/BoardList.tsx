import React from 'react';
import { UserRound } from 'lucide-react';

export default function BoardList() {
  // Fetch boards here

  return (
    <div className='space-y-4'>
      {/* Board list header */}
      <div className='flex items-center text-lg text-neutral-700 font-semibold'>
        <UserRound className='h-6 w-6 mr-2' />
        Your boards
      </div>
      {/* Grid of boards */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>

      </div>

    </div>
  )
}
