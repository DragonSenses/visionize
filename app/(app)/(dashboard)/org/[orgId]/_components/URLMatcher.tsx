"use client";

import { useOrganizationList } from '@clerk/nextjs';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

// Checks the organization ID of the URL and synchronize it with the page
export default function URLMatcher() {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: params.orgId as string,
    });
  }, [setActive, params.orgId]);

  return null;
}
