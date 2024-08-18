"use client";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

type projectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl, link }: projectProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.25 1"],
	});
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
	return (
		<motion.div
			className='mb-3 sm:mb-8 last:mb-0 cursor-pointer group'
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}>
			<a
				href={link}
				target='_blank'>
				<section className='relative bg-white/50 dark:bg-slate-700/25 shadow-xl shadow-black/[0.03] rounded-lg max-w-[45rem] overflow-hidden sm:pr-8 sm:h-[22rem] sm:group-even:pl-8 hover:bg-sky-200/35 dark:hover:bg-sky-200/20 dark:text-white transition'>
					<div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
						<h3 className='text-2xl font-medium'>{title}</h3>
						<p className='mt-2 leading-relaxed text-gray-600 dark:text-white/75'>
							{description}
						</p>
						<ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
							{tags.map((tag, idx) => (
								<li
									className='bg-black/[0.65] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full w-fit font-medium'
									key={idx}>
									{tag}
								</li>
							))}
						</ul>
					</div>

					<Image
						src={imageUrl}
						alt={title}
						width={500}
						height={500}
						quality={"100"}
						className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] object-cover rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2 group-hover:scale-105 transition'
					/>
				</section>
			</a>
		</motion.div>
	);
};

export default Project;
