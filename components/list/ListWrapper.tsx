import React from 'react';

interface ListWrapperProps {
  children: React.ReactNode;
};

export default function ListWrapper({
  children
}: ListWrapperProps) {
  return (
    <li>
      {children}
    </li>
  )
}
