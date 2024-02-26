"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

import { unsplashApi } from '@/lib/unsplashAPI';
import { cn } from '@/lib/utils';
import { defaultImages } from '@/constants/images';

interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
};

export default function FormSelector({
  id,
  errors,
}: FormPickerProps) {
  // Use useFormStatus hook to get the pending state of the form
  const { pending } = useFormStatus();

  // Define images state variable as an array of objects
  const [images, setImages] = useState<Array<Record<string, any>>>(
    defaultImages
  );

  // Add isLoading state, true by default because fetch starts immediately
  const [isLoading, setIsLoading] = useState(true);

  // Define a state for storing the selected image
  const [selectedImageId, setSelectedImageId] = useState(null);

  // Selection count determines how many images to fetch
  const selectionCount: number = 9;

  // Use useEffect hook to fetch images on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Use unsplashApi to get random photos from collection 317099
        const result = await unsplashApi.photos.getRandom({
          collectionIds: ["317099"],
          count: selectionCount,
        });
        
        if (result && result.response) {
          // Cast result.response as an array of objects & assign it to imageData
          const imageData = (result.response as Array<Record<string, any>>);
          setImages(imageData);
        } else {
          console.error("Failed to fetch images from Unsplash.")
        }

      } catch(error) {
        console.log(error);
        // Use the images constant as fallback in case of fetch error
        setImages(defaultImages);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Return a loader component when isLoading state is true
  if (isLoading) {
    return (
      <div className='flex items-center justify-center p-6'>
        <Loader2 className='h-6 w-6 text-sky-700 animate-spin' />
      </div>
    )
  }

  // Return a div element with a grid of images
  return (
    <div className='relative'>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map((image) => (
          <div 
            key={image.id}
            onClick={() => {
              // Check if the form is pending and return early if true
              if (pending) {
                return;
              }
              setSelectedImageId(image.id)
            }}
            // Use cn function to apply conditional class names based on the pending state
            className={cn(
              'relative aspect-video bg-muted cursor-pointer group transition hover:opacity-75',
              pending && 'cursor-auto opacity-50 hover:opacity-50'
            )}
          >
            <Image
              src={image.urls.thumb} 
              alt="Image from Unsplash"
              className='object-cover rounded-sm'
              fill
            />
          </div>
        ))}
      </div>
    </div>
  )
}
