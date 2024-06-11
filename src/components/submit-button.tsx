import React from 'react';
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      disabled={pending}
      className='w-[8.5rem] py-3 bg-gray-900 text-white rounded-full outline-none duration-200 flex justify-center items-center gap-2 hover:scale-110 disabled:scale-100 disabled:bg-opacity-65'>
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          <span>Send</span>
          <FaPaperPlane className='text-xs' />
        </>
      )}
    </button>
  );
}
