import React from 'react';
import URLMatcher from './_components/URLMatcher';

export default function OrganizationIdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <URLMatcher />
      {children}
    </>
  )
}
