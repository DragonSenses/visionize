import React from 'react';
import Sidebar from '../_components/Sidebar';

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='px-4 pt-20 md:pt-24 mx-auto max-w-6xl 2xl:max-w-screen-xl'>
      <div className='flex '>
        <div className='w-64 shrink-0 hidden md:block'>
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  )
}