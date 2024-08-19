"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme") as Theme;
		if (localTheme) {
			setTheme(localTheme);
			if (localTheme === "dark") {
				document.documentElement.classList.add("dark");
			}
		}
	}, []);

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			setTheme("light");
			localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<button
			className='fixed bottom-10 right-10 bg-white/50 w-[3rem] aspect-square rounded-full backdrop-blur-[6px] shadow-lg shadow-black/[0.03] hover:scale-110 active:scale-110 duration-200 dark:bg-slate-800/50'
			onClick={toggleTheme}>
			{theme === "dark" ? (
				<div
					title='Dusk mode'
					className='flex justify-center items-center w-full h-full'>
					<BsMoon className='text-lg' />
				</div>
			) : (
				<div
					title='Dawn mode'
					className='flex justify-center items-center w-full h-full'>
					<BsSun className='text-lg' />
				</div>
			)}
		</button>
	);
}
