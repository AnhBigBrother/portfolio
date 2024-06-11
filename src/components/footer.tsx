import React from 'react';

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-neutral-800/50 dark:text-neutral-200/30'>
      <p className='mb-2 text-sm'>
        &copy; 2024{' '}
        <a
          href='https://github.com/AnhBigBrother/portfolio'
          target='_blank'
          className='hover:text-gray-950 underline'>
          BigBruhh portfolio
        </a>
        . All rights reserved.
      </p>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> built with React & Next.js (Version 14: App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, Resend(React email).
      </p>
    </footer>
  );
}
