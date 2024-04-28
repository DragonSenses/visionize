"use client";

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/**
 * QueryProvider component wraps the entire application with a QueryClientProvider.
 * It initializes a new QueryClient and provides it to all child components.
 *
 * @param children React nodes that represent the child components.
 */
export default function QueryProvider({
  children
}: {
  children: React.ReactNode;
}) {
  // Initialize a new QueryClient using useState.
  const [queryClient] = useState(() => new QueryClient());

  return (
    // Provide the queryClient to all child components.
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}