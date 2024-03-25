"use client";

import React from 'react';
import { List } from '@prisma/client';
import { MoreHorizontal, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ListOptionsProps {
  data: List;
  handleAddCardToList: () => void;
};

export default function ListOptions({
  data,
  handleAddCardToList,
}: ListOptionsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* Open button */}
        <Button>
          <MoreHorizontal />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div>
          List actions
        </div>
        {/* Close button */}
        <PopoverClose asChild>
          <Button>
            <X />
          </Button>
        </PopoverClose>
        {/* List Actions */}
      </PopoverContent>
    </Popover>
  )
}
