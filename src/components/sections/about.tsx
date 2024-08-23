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
			className='max-w-[48rem] px-3 text-center leading-8 scroll-mt-28 sm:scroll-mt-36'
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay: 0.175, duration: 0.5, type: "spring", stiffness: 360, damping: 50 }}>
			<SectionHeading>About me</SectionHeading>
			<p className='mb-5'>
				I graduated from{" "}
				<span className='font-semibold'>Hanoi University of Science and Technology</span> with a
				major in <span className='font-semibold'>Mechatronics Engineering</span>. While still in
				school, I tried programming and found my passion for it. I am{" "}
				<span className='font-semibold'>especially interested</span> in{" "}
				<span className='font-semibold'>data structures & algorithms</span>, I enjoy solving
				complex <span className='font-semibold'>algorithmic problems</span> in{" "}
				<span className='font-semibold'>Leetcode</span> and have solved over 300 problems.
			</p>

			<p>
				My core stack is{" "}
				<span className='font-semibold'>JavaScript, TypeScript, React, and Node.js</span>. I'm
				also familiar with <span className='font-semibold'>Java</span> and am learning{" "}
				<span className='font-semibold'>Go</span>. All the knowledge I have comes from{" "}
				<span className='font-semibold'>self-study</span>. I'm always interested in learning new
				technologies. Currently, I am looking for a{" "}
				<span className='font-semibold'>full-time position</span> as a{" "}
				<span className='font-semibold'>software developer</span>. Working in a{" "}
				<span className='font-semibold'>dynamic</span> and{" "}
				<span className='font-semibold'>challenging</span> environment is my desire.
			</p>
		</motion.section>
	);
}
