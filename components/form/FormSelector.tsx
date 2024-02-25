"use client";

import React, { useEffect, useState } from 'react';
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

  // Fetch images with useEffect
  useEffect(() => {
    // Fetch images from collection 317099, curated by Unsplash Editorial
    const fetchImages = async () => {
      try {
        const result = await unsplashApi.photos.getRandom({
          collectionIds: ["317099"],
          count: 9,
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
      }
    }
  });

  return (
    <div>FormSelector</div>
  )
}
