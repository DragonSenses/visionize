import React from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import FormInput from '@/components/form/FormInput';
import FormSubmitButton from '@/components/form/FormSubmitButton';

import { useServerAction } from '@/hooks/useServerAction';
import { createBoard } from "@/actions/createBoard/index";
import FormSelector from '@/components/form/FormSelector';

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
  const { executeServerAction, fieldErrors } = useServerAction(createBoard, {
    onSuccess: (data) => { 
      console.log({ data });
      toast.success("Board created.")
    },
    onError: (error) => {
      console.log({ error });
      toast.error(error);
    },
  });

  function onSubmit(formData: FormData){
    const title = formData.get('title') as string;

    executeServerAction({ title });
  }

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
        <form action={onSubmit} className='space-y-4'>
          <div className='space-y-4'>
            <FormSelector 
              id='image-id'
              errors={fieldErrors}
            />
            <FormInput
              id='title'
              label='Board title'
              type='text'
              errors={fieldErrors}
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
