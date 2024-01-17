import React from 'react';
import { OrganizationList } from '@clerk/nextjs';

export default function CreateOrganizationPage() {
  return (
    <OrganizationList 
      afterCreateOrganizationUrl='/organization/:id'
      afterSelectPersonalUrl='/user/:id'
      afterSelectOrganizationUrl='/organization/:id'
    />
  );
};
