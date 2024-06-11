'use client';
import SectionHeading from '@/components/section-heading';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendMessage } from '@/actions/sendMessage';
import SubmitButton from '@/components/submit-button';
import toast from 'react-hot-toast';

export default function Contact() {
  const ref = useSectionInView('Contact');

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='scroll-mt-28 sm:scroll-mt-36 w-full max-w-[40rem] px-3'
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}>
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-center dark:text-white/60 mb-6'>
        Please contact me directly at{' '}
        <a
          className='text-sky-500 hover:underline'
          href='mailto:anh.bigbruhh@gmail.com'>
          anh.bigbruhh@gmail.com
        </a>{' '}
        or through form below
      </p>
      <form
        className='w-full flex flex-col items-center'
        action={async (formData: FormData) => {
          const { data, error } = await sendMessage(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully!');
        }}>
        <input
          type='email'
          name='senderEmail'
          required
          maxLength={100}
          className='h-14 rounded-lg px-4 w-full bg-white dark:bg-sky-200/10 outline-none dark:placeholder:text-neutral-100/70'
          placeholder='Your email'
        />
        <textarea
          name='message'
          required
          maxLength={5000}
          className='w-full h-52 my-3 rounded-lg p-4 resize-none bg-white dark:bg-sky-200/10 outline-none dark:placeholder:text-neutral-100/70'
          placeholder='Your message'
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
