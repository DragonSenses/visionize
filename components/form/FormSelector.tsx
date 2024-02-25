"use client";

import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

import { unsplashApi } from '@/lib/unsplashAPI';

interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
};

export default function FormSelector({
  id,
  errors,
}: FormPickerProps) {
  const [images, setImages] = useState<Array<Record<string, any>>>([]);
  // Add isLoading state, true by default because fetch starts immediately
  const [isLoading, setIsLoading] = useState(true);

  const selectionCount: number = 9;

  // Fetch images with useEffect
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Use unsplashApi to get random photos from collection 317099
        const result = await unsplashApi.photos.getRandom({
          collectionIds: ["317099"],
          count: selectionCount,
        });
        
        if (result && result.response) {
          const imageData = (result.response as Array<Record<string, any>>);
          setImages(imageData);
        } else {
          console.error("Failed to fetch images from Unsplash.")
        }

      } catch(error) {
        console.log(error);
        // Reset images array
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    };
  });

  // Return a loader component when isLoading state is true
  if (isLoading) {
    return (
      <div className='flex items-center justify-center p-6'>
        <Loader2 className='h-6 w-6 text-sky-700 animate-spin' />
      </div>
    )
  }

  return (
    <div>FormSelector</div>
  )
}
