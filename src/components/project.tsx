"use client";
import { projectsData } from "@/data";
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
			className='group mb-3 cursor-pointer last:mb-0 sm:mb-8'
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}>
			<a
				href={link}
				target='_blank'>
				<section className='bg-secondary relative max-w-[45rem] overflow-hidden rounded-lg shadow-xl shadow-black/[0.03] transition sm:h-[22rem] sm:pr-8 sm:group-even:pl-8 dark:text-white'>
					<div className='flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]'>
						<h3 className='text-2xl font-medium'>{title}</h3>
						<p className='mt-2 leading-relaxed text-gray-600 dark:text-white/75'>
							{description}
						</p>
						<ul className='mt-4 flex flex-wrap gap-2 sm:mt-auto'>
							{tags.map((tag, idx) => (
								<li
									className='w-fit rounded-full bg-black/[0.65] px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-white'
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
						className='group-even:-right-[initial] absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg object-cover shadow-2xl transition group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 group-even:group-hover:-translate-y-3 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 sm:block'
					/>
				</section>
			</a>
		</motion.div>
	);
};

export default Project;
