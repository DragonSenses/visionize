import React from 'react';
import { OrganizationList } from '@clerk/nextjs';

export default function OrganizationSelectionPage() {
  return (
    <OrganizationList
      hidePersonal={true}
      afterCreateOrganizationUrl='/org/:id'
      afterSelectOrganizationUrl='/org/:id'
    />
  );
};
