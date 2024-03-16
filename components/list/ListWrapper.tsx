import React from 'react';

interface ListWrapperProps {
  children: React.ReactNode;
};

export default function ListWrapper({
  children
}: ListWrapperProps) {
  return (
    <li className='shrink-0 h-full w-72 select-none'>
      {children}
    </li>
  )
}
