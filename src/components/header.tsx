"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section.context";

export default function Header() {
	const { activeSection, setActiveSection, setClickedSection } = useActiveSectionContext();

	return (
		<header className='relative z-10'>
			<nav className='fixed left-1/2 top-0 flex w-full -translate-x-1/2 items-center justify-center px-3 py-2 sm:top-6 sm:w-[36rem] sm:rounded-full'>
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					className='shadow-custom absolute inset-0 bg-white/50 sm:rounded-full dark:bg-black dark:bg-opacity-70'></motion.div>
				<ul className='flex w-full flex-row flex-wrap items-center justify-center gap-x-5 text-[0.9rem] font-medium text-gray-700 sm:flex-nowrap sm:justify-between sm:gap-5'>
					{links.map((link) => (
						<motion.li
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							className='flex items-center justify-center'
							key={link.hash}>
							<Link
								onClick={() => {
									setClickedSection(link.name);
									setActiveSection(link.name);
								}}
								className={`relative z-10 flex w-full items-center justify-center rounded-full px-3 py-1 transition hover:text-black sm:py-2 dark:hover:text-gray-200 ${
									activeSection === link.name
										? "text-black dark:text-white"
										: "dark:text-white/60"
								}`}
								href={link.hash}>
								{link.name}
								{link.name === activeSection && (
									<motion.span
										className='absolute inset-0 -z-10 rounded-full bg-neutral-500/10'
										layoutId='activeSection'
										transition={{
											type: "spring",
											stiffness: 380,
											damping: 30,
										}}></motion.span>
								)}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	);
}
