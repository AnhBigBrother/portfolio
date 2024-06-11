'use client';
import React from 'react';
import { motion } from 'framer-motion';

function VerticalTimeline({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative pt-7 w-full flex flex-col gap-[2.5rem] overflow-hidden'>
      <div className='absolute w-1 h-full rounded-full bg-white/80 dark:bg-sky-200/20 left-10 sm:left-1/2 -translate-x-1/2 -translate-y-7'></div>
      {children}
    </div>
  );
}

function VerticalTimelineElement({ children, position, icon, date }: { children: React.ReactNode; position: string; icon: any; date: string }) {
  const fittedIcon = React.cloneElement(icon, { className: icon.props.className + ' w-6 h-6 text-gray-900 dark:text-white/80' });
  return (
    <div className={`relative w-full pl-[90px] pr-3 sm:pl-0 h-auto min-h-20 flex  ${position === 'left' ? 'sm:justify-start sm:pl-3 sm:pr-0' : 'flex-row-reverse'}`}>
      <motion.div
        className='absolute rounded-full w-14 aspect-square bg-white/80 left-10 sm:left-1/2 flex justify-center items-center dark:bg-sky-200/20 dark:backdrop-blur-[0.5rem]'
        initial={{ opacity: 0, x: '-50%', scale: 0 }}
        whileInView={{ opacity: 1, x: '-50%', scale: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 360, damping: 50 }}>
        {fittedIcon}
      </motion.div>
      <div className={`w-full sm:w-1/2 flex ${position === 'left' ? 'sm:pl-0 sm:pr-16 sm:justify-end' : 'sm:pl-16 sm:pr-0 justify-start'}`}>
        <motion.div
          className='relative px-5 py-3 rounded-lg bg-white/80 dark:bg-sky-200/10 text-wrap'
          initial={{ x: position === 'left' ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 360, damping: 50 }}>
          <div className='absolute top-5 left-0 -translate-x-[100%] border dark:border-opacity-35 border-l-0 border-t-8 border-b-8 border-t-transparent border-b-transparent border-r-8 border-r-white/80 dark:border-r-sky-200/10 sm:hidden'></div>
          {position === 'left' ? (
            <div className='absolute hidden sm:block top-5  right-0 translate-x-[100%] border dark:border-opacity-35 border-r-0 border-t-8 border-b-8 border-t-transparent border-b-transparent border-l-8 border-l-white/80 dark:border-l-sky-200/10'></div>
          ) : (
            <div className='absolute hidden sm:block top-5  left-0 -translate-x-[100%] border dark:border-opacity-35 border-l-0 border-t-8 border-b-8 border-t-transparent border-b-transparent border-r-8 border-r-white/80 dark:border-r-sky-200/10'></div>
          )}
          {children}
        </motion.div>
      </div>
      <motion.div
        className='h-14 px-9 items-center hidden sm:flex'
        initial={{ x: position === 'right' ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 360, damping: 50 }}>
        <p>{date}</p>
      </motion.div>
    </div>
  );
}

export { VerticalTimeline, VerticalTimelineElement };
