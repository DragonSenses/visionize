import React from 'react';
import { OrganizationList } from '@clerk/nextjs';

export default function OrganizationSelectionPage() {
  return (
    <OrganizationList 
      afterCreateOrganizationUrl='/organization/:id'
      afterSelectPersonalUrl='/user/:id'
      afterSelectOrganizationUrl='/organization/:id'
    />
  );
};
