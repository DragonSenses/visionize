"use client";

import React, { useState } from 'react';
import { Layout } from 'lucide-react';

import { CardWithList } from '@/types/types';
import FormInput from '@/components/form/FormInput';

interface HeaderProps {
  data: CardWithList;
}

export default function Header({
  data,
}: HeaderProps) {
  const [title, setTitle] = useState(data?.title);

  return (
    <div>
      <Layout />
      <div>
        <form>
          <FormInput
            id='title'
            defaultValue={title}
          />
        </form>
      </div>
    </div>
  )
}
