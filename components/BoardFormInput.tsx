import React from 'react';

interface BoardFormInputProps {
  errors?: {
    title?: string[];
  }
}

export default function BoardFormInput({
  errors
} : BoardFormInputProps) {
  return (
    <div className="flex flex-col space-y-2">
      <input
        id='title'
        name='title'
        placeholder='Enter a board title'
        required
        className='border-black border p-1'
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className='text-rose-500'>
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  )
}
