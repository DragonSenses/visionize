import React from 'react';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import FormInput from '@/components/form/FormInput';
import FormSubmitButton from '@/components/form/FormSubmitButton';

interface FormPopoverProps {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

export default function FormPopover({
  children,
  align,
  sideOffset = 0,
  side = 'bottom',
}: FormPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        align={align}
        sideOffset={sideOffset}
        side={side}
        className='w-80 pt-3'
      >
        <div className='pb-4 font-medium text-sm text-center text-neutral-600'>
          Create board
        </div>
        <PopoverClose asChild>
          <Button
            variant='destructive'
            className='absolute top-2 right-2 h-auto w-auto text-neutral-600'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
        <form className='space-y-4'>
          <div className='space-y-4'>
            <FormInput
              id='title'
              label='Board title'
              type='text'
            />
          </div>
          <FormSubmitButton 
            size='default'
            variant='default'
            className='w-full'
          >
            Create
          </FormSubmitButton>
        </form>
      </PopoverContent>
    </Popover>
  )
}
