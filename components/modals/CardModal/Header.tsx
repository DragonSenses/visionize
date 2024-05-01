"use client";

import React from 'react';
import { Layout } from 'lucide-react';

import { CardWithList } from '@/types/types';
import FormInput from '@/components/form/FormInput';

interface HeaderProps {
  data: CardWithList;
}

export default function Header({
  data,
}: HeaderProps) {
  return (
    <div>
      <Layout />
      <div>
        <form>
          <FormInput
            id='title'
          />
        </form>
      </div>
    </div>
  )
}
