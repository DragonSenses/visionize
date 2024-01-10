import React from 'react';
import { ClipboardCheck, KanbanSquare } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col'>
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
          <KanbanSquare className='h-6 w-6 mr-2'/>
          Kanban your way
          <ClipboardCheck className='h-6 w-6 mx-2'/>
        </div>
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
          <span className='mr-1'><strong>Visionize</strong></span> your tasks
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit'>
          Turn your vision into reality.
        </div>
      </div>
    </div>
  )
}
