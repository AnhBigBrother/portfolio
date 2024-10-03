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
				<span className='font-semibold'>algorithms enthusiast</span>, who enjoys solving{" "}
				<span className='font-semibold'>Leetcode algorithm problems</span> and participating in{" "}
				<span className='font-semibold'>programming competitions</span> on weekends.
			</p>

			<p>
				My skills are strongly focused on <span className='font-semibold'>JavaScript</span> with{" "}
				<span className='font-semibold'>React & Next.js</span> on the frontend and{" "}
				<span className='font-semibold'>Nest.js</span> on the backend. I'm also exploring{" "}
				<span className='font-semibold'>Golang</span> and{" "}
				<span className='font-semibold'>Java</span>, aiming to deep-diving into the backend. As
				a <span className='font-semibold'>self-taught developer</span>, I'm always willing to
				expand my knowledge and stay up-to-date with new technologies. I'm currently seeking a
				full-time <span className='font-semibold'>software developer</span> role, working in a{" "}
				<span className='font-semibold'>dynamic</span> and{" "}
				<span className='font-semibold'>challenging</span> environment is my desire.
			</p>
		</motion.section>
	);
}
