"use client";
import { useActiveSectionContext } from "@/context/active-section.context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { HiDownload, HiArrowNarrowRight } from "react-icons/hi";

export default function Intro() {
	const ref = useSectionInView("Home", 0.5);
	const { setActiveSection, setClickedSection } = useActiveSectionContext();

	return (
		<section
			ref={ref}
			id='home'
			className='max-w-[45rem] scroll-mt-28 text-center sm:scroll-mt-36'>
			<div className='flex flex-col items-center justify-center'>
				<div className='relative mb-[2rem]'>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}>
						<Image
							src={"/avatar.png"}
							alt='me'
							height={192}
							width={192}
							className='shadow-custom h-24 w-24 rounded-full border-[0.35rem] border-white/15 object-cover'
						/>
					</motion.div>
					<motion.span
						className='absolute bottom-0 right-0 text-4xl text-white'
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.2,
							duration: 0.7,
						}}>
						💤
					</motion.span>
				</div>
			</div>
			<motion.h1
				className='mb-10 mt-4 px-3 text-xl font-medium leading-[1.5]'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}>
				<span className='font-semibold'>Hi, I'm Tien Anh Tran,</span> a{" "}
				<span className='font-semibold'>self-taught developer</span> with a passion for solving{" "}
				<span className='font-semibold'>algorithms</span> and exploring cutting-edge
				technologies. My expertise lies primarily in{" "}
				<span className='font-semibold'>React (Next.js)</span> and{" "}
				<span className='font-semibold'>Node.js</span>.
			</motion.h1>
			<motion.div
				className='flex flex-col items-center justify-center gap-3 font-medium sm:flex-row'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}>
				<Link
					href={"#contact"}
					onClick={() => {
						setActiveSection("Contact");
						setClickedSection("Contact");
					}}
					className='shadow-custom flex h-[52px] w-fit items-center gap-2 rounded-full bg-black/80 px-7 text-white shadow-lg shadow-black/[0.05] duration-200 hover:scale-110'>
					Contact me here <HiArrowNarrowRight className='h-5 w-5' />
				</Link>
				<a
					className=' bg-secondary flex h-[52px] w-fit cursor-pointer items-center gap-2 rounded-full px-7 shadow-lg shadow-black/[0.05] duration-200 hover:scale-110 dark:hover:text-white'
					href='/TIEN ANH TRAN - Resume.pdf'>
					Download CV <HiDownload className='h-5 w-5' />
				</a>
				<div className='flex flex-row gap-2'>
					<a
						title='Github'
						className='bg-secondary dark:hover:bg-bg-white/20 group cursor-pointer rounded-full p-4 shadow-lg shadow-black/[0.05] duration-200 hover:scale-[1.15]'
						href='https://github.com/AnhBigBrother'
						target='_blank'>
						<SiGithub className='h-5 w-5 opacity-70 group-hover:opacity-100' />
					</a>
					<a
						title='Leetcode'
						className='bg-secondary dark:hover:bg-bg-white/20 group cursor-pointer rounded-full p-4 shadow-lg shadow-black/[0.05] duration-200 hover:scale-[1.15]'
						href='https://leetcode.com/u/TienAnh013/'
						target='_blank'>
						<SiLeetcode className='h-5 w-5 opacity-70 group-hover:opacity-100' />
					</a>
				</div>
			</motion.div>
		</section>
	);
}
