"use client";
import React from "react";
import { motion } from "framer-motion";

function VerticalTimeline({ children }: { children: React.ReactNode }) {
	return (
		<div className='relative flex w-full flex-col gap-[2.5rem] overflow-hidden pt-7'>
			<div className='bg-secondary absolute left-10 h-full w-1 -translate-x-1/2 -translate-y-7 rounded-full sm:left-1/2'></div>
			{children}
		</div>
	);
}

function VerticalTimelineElement({
	children,
	position,
	icon,
	date,
}: {
	children: React.ReactNode;
	position: string;
	icon: any;
	date: string;
}) {
	const fittedIcon = React.cloneElement(icon, {
		className: icon.props.className + " w-6 h-6 text-gray-900 dark:text-white/80",
	});
	return (
		<div
			className={`relative flex h-auto min-h-20 w-full pl-[90px] pr-3 sm:pl-0  ${
				position === "left" ? "sm:justify-start sm:pl-3 sm:pr-0" : "flex-row-reverse"
			}`}>
			<motion.div
				className='absolute left-10 flex aspect-square w-14 items-center justify-center rounded-full bg-white/60 backdrop-blur-[3px] sm:left-1/2 dark:bg-neutral-700/25 dark:backdrop-blur-[0.5rem]'
				initial={{ opacity: 0, x: "-50%", scale: 0 }}
				whileInView={{ opacity: 1, x: "-50%", scale: 1 }}
				transition={{ duration: 0.5, type: "spring", stiffness: 360, damping: 50 }}>
				{fittedIcon}
			</motion.div>
			<div
				className={`flex w-full sm:w-1/2 ${
					position === "left"
						? "sm:justify-end sm:pl-0 sm:pr-16"
						: "justify-start sm:pl-16 sm:pr-0"
				}`}>
				<motion.div
					className='bg-secondary group relative text-wrap rounded-lg px-5 py-3'
					initial={{ x: position === "left" ? -100 : 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5, type: "spring", stiffness: 360, damping: 50 }}>
					<div className='triangle-left sm:hidden'></div>
					{position === "left" ? (
						<div className='triangle-right hidden sm:block '></div>
					) : (
						<div className='triangle-left hidden sm:block '></div>
					)}
					{children}
				</motion.div>
			</div>
			<motion.div
				className='hidden h-14 items-center px-9 sm:flex'
				initial={{ x: position === "right" ? -100 : 100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.5, type: "spring", stiffness: 360, damping: 50 }}>
				<p>{date}</p>
			</motion.div>
		</div>
	);
}

export { VerticalTimeline, VerticalTimelineElement };
