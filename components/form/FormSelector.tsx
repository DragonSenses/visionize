"use client";

import React from 'react';

interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
};

export default function FormSelector({
  id,
  errors,
}: FormPickerProps) {
  return (
    <div>FormSelector</div>
  )
}
