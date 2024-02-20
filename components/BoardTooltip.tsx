import React from 'react'

interface BoardTooltipProps {
  children: React.ReactNode;
};

export default function BoardTooltip({
  children,
}: BoardTooltipProps) {
  return (
    <div>
      {children}
    </div>
  )
}
