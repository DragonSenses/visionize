'use client';

import { useState, useEffect, ChangeEventHandler, useRef } from 'react';
import { useOrganization, useUser } from '@clerk/nextjs';
import type { OrganizationCustomRoleKey } from '@clerk/types';

export const OrgMembersParams = {
  memberships: {
    pageSize: 5,
    keepPreviousData: true,
  },
};

// List of organization memberships. Administrators can
// change member roles or remove members from the organization.
export const ManageRoles = () => {
  const { user } = useUser();
  const { isLoaded, memberships } = useOrganization(OrgMembersParams);

  if (!isLoaded) {
    return <>Loading</>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Memberships List</h1>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Joined</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {memberships?.data?.map((mem) => (
              <tr key={mem.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">
                  {mem.publicUserData.identifier}{' '}
                  {mem.publicUserData.userId === user?.id && '(You)'}
                </td>
                <td className="py-2 px-4 border-b">{mem.createdAt.toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b">
                  <SelectRole
                    defaultRole={mem.role}
                    onChange={async (e) => {
                      await mem.update({
                        role: e.target.value as OrganizationCustomRoleKey,
                      });
                      await memberships?.revalidate();
                    }}
                  />
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={async () => {
                      await mem.destroy();
                      await memberships?.revalidate();
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4 w-full">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
          disabled={!memberships?.hasPreviousPage || memberships?.isFetching}
          onClick={() => memberships?.fetchPrevious?.()}
        >
          Previous
        </button>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
          disabled={!memberships?.hasNextPage || memberships?.isFetching}
          onClick={() => memberships?.fetchNext?.()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

type SelectRoleProps = {
  fieldName?: string;
  isDisabled?: boolean;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  defaultRole?: string;
};

const SelectRole = (props: SelectRoleProps) => {
  const { fieldName, isDisabled = false, onChange, defaultRole } = props;
  const { organization } = useOrganization();
  const [fetchedRoles, setRoles] = useState<OrganizationCustomRoleKey[]>([]);
  const isPopulated = useRef(false);

  useEffect(() => {
    if (isPopulated.current) return;
    organization
      ?.getRoles({
        pageSize: 20,
        initialPage: 1,
      })
      .then((res) => {
        isPopulated.current = true;
        setRoles(
          res.data.map((roles) => roles.key as OrganizationCustomRoleKey)
        );
      });
  }, [organization, organization?.id]);

  if (fetchedRoles.length === 0) return null;

  return (
    <select
      name={fieldName}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onChange={onChange}
      defaultValue={defaultRole}
    >
      {fetchedRoles?.map((roleKey) => (
        <option key={roleKey} value={roleKey}>
          {roleKey}
        </option>
      ))}
    </select>
  );
};