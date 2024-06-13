import React from 'react';

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-800/50 dark:text-gray-400/70'>
      <p className='mb-2 text-sm'>
        &copy; 2024 <span className='underline'>BigBruhh portfolio</span>. All rights reserved.
      </p>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> built with React & Next.js (Version 14: App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, Resend(React email).
      </p>
    </footer>
  );
}
