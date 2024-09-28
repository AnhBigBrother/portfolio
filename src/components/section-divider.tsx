"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionDivider() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.25 1"],
	});
	const scaleProgess = useTransform(scrollYProgress, [1, 0], [0, 1]);
	const opacityProgess = useTransform(scrollYProgress, [1, 0], [0, 1]);
	return (
		<motion.div
			className='to-trafrom-transparent my-20 h-16 w-1 rounded-full bg-opacity-60 bg-gradient-to-b from-transparent via-purple-200 sm:my-24 sm:h-20 dark:bg-opacity-30'
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}></motion.div>
	);
}
