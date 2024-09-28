"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme") as Theme;
		if (localTheme === "dark") {
			document.documentElement.classList.add("dark");
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
			className='shadow-custom fixed bottom-10 right-10 aspect-square w-[3rem] rounded-full bg-white/50 duration-200 hover:scale-110 active:scale-110 dark:bg-black/50'
			onClick={toggleTheme}>
			{theme === "dark" ? (
				<div
					title='Dark mode'
					className='flex h-full w-full items-center justify-center'>
					<BsMoon className='text-lg' />
				</div>
			) : (
				<div
					title='Light mode'
					className='flex h-full w-full items-center justify-center'>
					<BsSun className='text-lg' />
				</div>
			)}
		</button>
	);
}
