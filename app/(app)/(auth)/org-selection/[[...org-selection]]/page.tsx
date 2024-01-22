import React from 'react';
import { OrganizationList } from '@clerk/nextjs';

export default function OrganizationSelectionPage() {
  return (
    <OrganizationList 
      afterCreateOrganizationUrl='/org/:id'
      afterSelectPersonalUrl='/user/:id'
      afterSelectOrganizationUrl='/org/:id'
    />
  );
};
