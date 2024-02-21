import React from 'react';

interface FormPopoverProps {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

export default function FormPopover({
  children,
  align,
  sideOffset = 0,
  side = 'bottom',
}: FormPopoverProps) {
  return (
    <div>
      FormPopover
      {children}
    </div>
  )
}
