import React from 'react';
import { Toaster } from "sonner";
import { ClerkProvider } from '@clerk/nextjs';

import ModalProvider from '@/components/providers/ModalProvider';
import QueryProvider from '@/components/providers/QueryProvider';

const AppLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  )
}

export default AppLayout