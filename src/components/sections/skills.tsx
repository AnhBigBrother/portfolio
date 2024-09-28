"use client";
import SectionHeading from "@/components/section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
	const ref = useSectionInView("Skills");

	return (
		<section
			ref={ref}
			id='skills'
			className='max-w-[52rem] scroll-mt-28 text-center sm:scroll-mt-36'>
			<SectionHeading>Skills</SectionHeading>
			<ul className='flex flex-wrap justify-center gap-2'>
				{skillsData.map((skill, idx) => (
					<motion.li
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: idx * 0.05 }}
						key={idx}
						className='bg-secondary rounded-xl px-5 py-3 hover:animate-bounce'>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
