'use client';
import { useActiveSectionContext } from '@/context/active-section.context';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { HiDownload, HiArrowNarrowRight } from 'react-icons/hi';

export default function Intro() {
  const ref = useSectionInView('Home', 0.5);
  const { setActiveSection, setClickedSection } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className='max-w-[50rem] text-center scroll-mt-28 sm:scroll-mt-36'>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative mb-[2rem]'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}>
            <Image
              src={'/avatar.png'}
              alt='me'
              height={192}
              width={192}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white/50 shadow-xl'
            />
          </motion.div>
          <motion.span
            className='absolute bottom-0 right-0 text-4xl text-white'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}>
            💤
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-xl font-medium leading-[1.5]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className='font-semibold'>Hello, I'm Tien Anh Tran.</span> I'm a <span className='font-semibold'>graduating student</span> with a strong base in <span className='font-semibold'>Data structures & Algorithms</span>. I enjoy
        solving problems and exploring new technologies. My core skills are focused on <span className='font-semibold'>React(Next.js)</span> and <span className='font-semibold'>Node.js</span>.
      </motion.h1>
      <motion.div
        className='flex justify-center items-center flex-col sm:flex-row font-medium gap-3'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
        <Link
          href={'#contact'}
          onClick={() => {
            setActiveSection('Contact');
            setClickedSection('Contact');
          }}
          className=' bg-gray-900 dark:bg-gray-900/80 text-white shadow-lg shadow-black/[0.05] px-7 h-[52px] flex items-center gap-2 rounded-full w-fit hover:scale-110 duration-200'>
          Contact me here <HiArrowNarrowRight className='w-5 h-5' />
        </Link>
        <a
          className=' bg-white/75 dark:bg-sky-200/10 dark:hover:text-white shadow-lg shadow-black/[0.05] px-7 h-[52px] flex items-center gap-2 rounded-full w-fit cursor-pointer hover:scale-110 duration-200'
          href='/TIEN ANH TRAN - Resume.pdf'>
          Download CV <HiDownload className='w-5 h-5' />
        </a>
        <div className='flex flex-row gap-2'>
          <a
            title='Github'
            className='group bg-white/75 dark:bg-sky-200/10 dark:hover:bg-bg-sky-200/20 shadow-lg shadow-black/[0.05] p-4 rounded-full cursor-pointer hover:scale-[1.15] duration-200'
            href='https://github.com/AnhBigBrother'
            target='_blank'>
            <SiGithub className='w-5 h-5 opacity-70 group-hover:opacity-100' />
          </a>
          <a
            title='Leetcode'
            className='group bg-white/75 dark:bg-sky-200/10 dark:hover:bg-bg-sky-200/20 shadow-lg shadow-black/[0.05] p-4 rounded-full cursor-pointer hover:scale-[1.15] duration-200'
            href='https://leetcode.com/u/TienAnh013/'
            target='_blank'>
            <SiLeetcode className='w-5 h-5 opacity-70 group-hover:opacity-100' />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
