"use client";

import React from 'react';
import { useFormState } from 'react-dom';

import createBoard from '@/actions/createBoard';
import { Button } from '@/components/ui/button';

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
      <div className="flex flex-col space-y-2">
        <input
          id='title'
          name='title'
          placeholder='Enter a board title'
          required
          className='border-black border p-1'
        />
        {state?.errors?.title ? (
           <div>
              {state.errors.title.map((error: string) => (
                <p key={error} className='text-rose-500'>
                  {error}
                </p>
              ))}
           </div>
        ) : null}
      </div>
      <Button type='submit'>
        Submit
      </Button>
    </form>
  )
}
