'use client';
import { useActiveSectionContext } from '@/context/active-section.context';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
  const ref = useSectionInView('Home', 0.5);
  const { setActiveSection, setClickedSection } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className='max-w-[48rem] text-center scroll-mt-28 sm:scroll-mt-36'>
      <div className='flex flex-col items-center justify-center'>
        <div className='relative mb-[2rem]'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}>
            <Image
              src={'/Descartes.jpg'}
              alt='me'
              height={192}
              width={192}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white/50 shadow-xl'
            />
          </motion.div>
          <motion.span
            className='absolute bottom-0 left-0 text-4xl text-white'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}>
            🫰
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-xl font-medium leading-[1.5]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <p>
          <span className='font-bold'>Hello, I'm Tien Anh Tran.</span> I'm a <span className='font-bold'>student</span> looking for my first job in software development. I enjoy exploring <span className='font-bold'>algorithms</span> and{' '}
          <span className='font-bold'>new technologies</span>.
        </p>
        <p>
          My core skills are focused on <span className='font-bold'>React(Next.js)</span> and <span className='font-bold'>Node.js</span>.
        </p>
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
          className=' bg-gray-900 dark:bg-gray-900/70 text-white shadow-lg shadow-black/[0.05] px-7 h-[52px] flex items-center gap-2 rounded-full w-fit hover:scale-110 duration-200'>
          Contact me here <BsArrowRight className='w-4 h-4' />
        </Link>
        <a
          className=' bg-white/75 dark:bg-sky-200/10 dark:hover:bg-bg-sky-200/20 shadow-lg shadow-black/[0.05] px-7 h-[52px] flex items-center gap-2 rounded-full w-fit cursor-pointer hover:scale-110 duration-200'
          href='/CV.pdf'
          download={true}>
          Download CV <HiDownload className='w-4 h-4' />
        </a>
        <div className='flex flex-row gap-2'>
          <a
            className='group bg-white/75 dark:bg-sky-200/10 dark:hover:bg-bg-sky-200/20 shadow-lg shadow-black/[0.05] p-4 rounded-full cursor-pointer hover:scale-[1.15] duration-200'
            href='https://github.com/AnhBigBrother'
            target='_blank'>
            <FaSquareGithub className='w-5 h-5 opacity-70 group-hover:opacity-100' />
          </a>
          <a
            className='group bg-white/75 dark:bg-sky-200/10 dark:hover:bg-bg-sky-200/20 shadow-lg shadow-black/[0.05] p-4 rounded-full cursor-pointer hover:scale-[1.15] duration-200'
            href='https://www.linkedin.com/in/tien-anh-tran-759465271/'
            target='_blank'>
            <FaLinkedin className='w-5 h-5 opacity-70 group-hover:opacity-100' />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
