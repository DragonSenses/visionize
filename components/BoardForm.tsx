"use client";

import React from 'react';
import { useFormState } from 'react-dom';

import createBoard from '@/actions/createBoard';
import BoardFormInput from '@/components/BoardFormInput';
import BoardFormButton from '@/components/BoardFormButton';

/* Create a form for creating a new board */
export default function BoardForm() {

  const initialState = {
    errors: {},
    message: "",
  };

  // Use the useFormState hook to create a state and an action for the form
  const [state, formAction] = useFormState(createBoard, initialState);

  /* The state will be updated by the createBoard action when the form is submitted
  The createBoard action is a function that takes the previous state and the form 
  data as arguments and returns a new state */

  // Pass the formAction as the action prop to the form element
  return (
    <form action={formAction}>
      <BoardFormInput errors={state?.errors}/>
      <BoardFormButton type="submit" variant="default" size="default">
        Submit
      </BoardFormButton>
    </form>
  )
}
