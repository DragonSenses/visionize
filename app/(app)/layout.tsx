import React from 'react';
import { Toaster } from "sonner";
import { ClerkProvider } from '@clerk/nextjs';

import ModalProvider from '@/components/providers/ModalProvider';

const AppLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
      <Toaster />
      <ModalProvider />
      {children}
    </ClerkProvider>
  )
}

export default AppLayout