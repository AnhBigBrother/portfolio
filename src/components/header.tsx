"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section.context";

export default function Header() {
	const { activeSection, setActiveSection, setClickedSection } = useActiveSectionContext();

	return (
		<header className='z-10 relative'>
			<nav className='fixed flex justify-center items-center top-0 left-1/2 -translate-x-1/2 w-full px-3 py-2 sm:top-6 sm:w-[36rem] sm:rounded-full'>
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					className='absolute inset-0 sm:rounded-full bg-white/60 dark:bg-opacity-80 shadow-custom dark:bg-black'></motion.div>
				<ul className='flex flex-row w-full flex-wrap items-center justify-center sm:justify-between gap-x-5 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5'>
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
								className={`relative w-full px-3 py-1 sm:py-2 flex items-center justify-center hover:text-black dark:hover:text-gray-200 transition rounded-full z-10 ${
									activeSection === link.name
										? "text-black dark:text-white"
										: "dark:text-white/60"
								}`}
								href={link.hash}>
								{link.name}
								{link.name === activeSection && (
									<motion.span
										className='bg-neutral-500/10 rounded-full absolute inset-0 -z-10'
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
