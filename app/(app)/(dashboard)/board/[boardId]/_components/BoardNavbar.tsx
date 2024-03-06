import React from 'react';
import { Board } from '@prisma/client';

interface BoardNavbarProps {
  data: Board;
}

export default async function BoardNavbar({
  data
}: BoardNavbarProps) {

  return (
    <div>
      BoardNavbar
    </div>
  )
}
