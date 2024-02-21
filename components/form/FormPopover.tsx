import React from 'react';

interface FormPopoverProps {
  children: React.ReactNode;
}

export default function FormPopover({
  children,
}: FormPopoverProps) {
  return (
    <div>
      FormPopover
      {children}
    </div>
  )
}
