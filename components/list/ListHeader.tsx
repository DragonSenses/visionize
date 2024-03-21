"use client";

import React from 'react'

import { List } from '@prisma/client';

interface ListHeaderProps {
  data: List;
}

export default function ListHeader({
  data,
}: ListHeaderProps) {
  return (
    <div>{data.title}</div>
  )
}
