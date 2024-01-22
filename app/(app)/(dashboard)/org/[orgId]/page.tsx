import { auth } from '@clerk/nextjs';
import React from 'react';

const OrganizationIdPage = () => {
  const { userId, orgId } = auth();

  return (
    <div>
      {`Organization: ${orgId}`}
    </div>
  );
};

export default OrganizationIdPage