import React from 'react';

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
    </main>
  )
}