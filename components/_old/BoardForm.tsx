"use client";

import React from 'react';

import { createBoard } from "@/actions/createBoard/index";
import { useServerAction } from '@/hooks/useServerAction';
import FormInput from '@/components/form/FormInput';
import FormSubmitButton from '@/components/form/FormSubmitButton';

/* Create a form for creating a new board */
export default function BoardForm() {
  const { executeServerAction, fieldErrors } = useServerAction(createBoard, {
    onError: (error) => { console.error(error); },
    onSuccess: (data) => { console.log(data, 'Successfully created Board!'); },
  });

  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;

    executeServerAction({ title });
  }

  return (
    <form action={onSubmit}>
      <FormInput 
        errors={fieldErrors}
        id="title"
        label="Board Title"
      />
      <FormSubmitButton 
        size="default" 
        variant="default" 
        className='p-1'
      >
        Save
      </FormSubmitButton>
    </form>
  )
}
