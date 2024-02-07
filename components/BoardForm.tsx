"use client";

import React from 'react';
import { useFormState } from 'react-dom';

import createBoard from '@/actions/createBoard';
import { Button } from '@/components/ui/button';

/* Create a form for creating a new board */
export default function BoardForm() {

  const initialState = {
    message: null,
    errors: {},
  };

  // Use the useFormState hook to create a state and an action for the form
  const [state, formAction] = useFormState(createBoard, initialState);
  
  /* The state will be updated by the createBoard action when the form is submitted
  The createBoard action is a function that takes the previous state and the form 
  data as arguments and returns a new state */

  // Pass the formAction as the action prop to the form element
  return (
    <form action={formAction}>
      <input
        id='title'
        name='title'
        placeholder='Enter a board title'
        required
        className='border-black border p-1'
      />
      <Button type='submit'>
        Submit
      </Button>
    </form>
  )
}
