'use client';
import React from 'react';
import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const ref = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id='about'
      className='max-w-[48rem] text-center leading-8 scroll-mt-28 sm:scroll-mt-36'
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.175, duration: 0.5, type: 'spring', stiffness: 360, damping: 50 }}>
      <SectionHeading>About me</SectionHeading>
      <p className='mb-5'>
        I am a student at <span className='font-semibold'>Hanoi University of Science and Technology</span>, majoring in mechatronics engineering. During my time at the university, I tried my hand at programming and found my passion in it.
        I'm an <span className='font-semibold'>algorithm enthusiast</span>, I love the feeling of finally figuring out a solution to a problem. I have solved over 300 problems in <span className='font-semibold'>Leetcode</span> and I'm
        continuing to enjoy my <span className='font-semibold'>Leetcode</span> journey every day 😎 (my Leetcode profile:{' '}
        <a
          className='text-sky-500 hover:underline'
          href='https://leetcode.com/u/TienAnh013/'
          target='_blank'>
          https://leetcode.com/u/TienAnh013
        </a>
        ).
      </p>

      <p>
        My core stack is <span className='font-semibold'>JavaScript, TypeScript, React, Node.js, and Next.js</span> and I'm also familiar with <span className='font-semibold'>Java</span> and{' '}
        <span className='font-semibold'>object-oriented programming</span>. All the knowledge I have comes from <span className='font-semibold'>self-study</span>. I'm always looking to learn new technologies. Currently, I am looking for a{' '}
        <span className='font-semibold'>full-time position</span> as a <span className='font-semibold'>software developer</span>. Working in a <span className='font-semibold'>dynamic</span> and{' '}
        <span className='font-semibold'>challenging</span> environment is my desire.
      </p>
    </motion.section>
  );
}
