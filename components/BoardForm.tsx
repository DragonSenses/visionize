"use client";

import React from 'react';

import { createBoard } from "@/actions/createBoard/index";
import BoardFormInput from '@/components/BoardFormInput';
import BoardFormButton from '@/components/BoardFormButton';
import { useServerAction } from '@/hooks/useServerAction';

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
      <BoardFormInput errors={fieldErrors}/>
      <BoardFormButton type="submit" variant="default" size="default">
        Submit
      </BoardFormButton>
    </form>
  )
}
