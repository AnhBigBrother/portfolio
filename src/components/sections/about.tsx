"use client";
import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const ref = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			id='about'
			className='max-w-[48rem] scroll-mt-28 px-3 text-center leading-8 sm:scroll-mt-36'
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay: 0.175, duration: 0.5, type: "spring", stiffness: 360, damping: 50 }}>
			<SectionHeading>About me</SectionHeading>
			<p className='mb-5'>
				I graduated from{" "}
				<span className='font-semibold'>Hanoi University of Science and Technology</span> with a
				major in <span className='font-semibold'>Mechatronics Engineering</span>. During my
				university years, I tried programming and found my passion for it. I'm an{" "}
				<span className='font-semibold'>algorithms enthusiast</span>, I love solving challenging
				algorithmic problems on Leetcode that push me to grow and improve.
			</p>

			<p>
				I have good knowledge in the <span className='font-semibold'>JavaScript ecosystem</span>
				, with various technologies such as{" "}
				<span className='font-semibold'> TypeScript, Node.js, React, Next.js</span>, etc. I also
				fell in love with <span className='font-semibold'>Golang</span> and its standard
				library. As someone who values personal development first, I always look forward to
				facing new challenges to improve myself every day and find my life worth living.
			</p>
		</motion.section>
	);
}
