import React from 'react';
import Sidebar from '../_components/Sidebar';

// Add following styles to <main> to limit the width on larger screens
// max-w-6xl 2xl:max-w-screen-xl

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='px-4 pt-20 md:pt-24 mx-auto'>
      <div className='flex gap-x-7'>
        <div className='w-64 shrink-0 hidden md:block'>
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  )
}