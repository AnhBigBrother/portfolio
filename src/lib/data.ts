import React from "react"
import { PiGraduationCap } from "react-icons/pi"
import { LiaGraduationCapSolid } from "react-icons/lia"
import { LuCode2 } from "react-icons/lu"
import { IconBaseProps } from "react-icons"

type TLink = {
	name: string
	hash: string
}

type TExperience = {
	title: string
	location: string
	description: string
	date: string
	icon: React.FunctionComponentElement<IconBaseProps>
}
type TProject = {
	title: string
	description: string
	imageUrl: string
	tags: string[]
	link: string
}

export const links : TLink[] = [
	{
		name: "Home",
		hash: "/#home",
	},
	{
		name: "About",
		hash: "/#about",
	},
	{
		name: "Projects",
		hash: "/#projects",
	},
	{
		name: "Skills",
		hash: "/#skills",
	},
	{
		name: "Experience",
		hash: "/#experience",
	},
	{
		name: "Contact",
		hash: "/#contact",
	},
] as const

export const experienceData: TExperience[] = [
	{
		title: "Start university",
		location: "Hanoi, VN",
		description:
			"Started studying at Hanoi University of Science and Technology (Mechatronic Engineering).",
		icon: React.createElement(PiGraduationCap),
		date: "Seb, 2018",
	},
	{
		title: "Software Developer",
		location: "Hanoi, VN",
		description: "Software Developer Intern at JITS Innovation Labs LLC.",
		icon: React.createElement(LuCode2),
		date: "Aug, 2024",
	},
	{
		title: "Graduate university",
		location: "Hanoi, VN",
		description:
			"Graduated from Hanoi University of Science and Technology (Mechatronic Engineering - Intelligent Mechatronic Systems).",
		icon: React.createElement(LiaGraduationCapSolid),
		date: "Seb, 2024",
	},
] as const

export const projectsData: TProject[] = [
	{
		title: "Messenger clone",
		description:
			"A real-time chat app where you can log in with your Google or Github account and start chatting with your friends. You can send messages or pictures and also create group chats.",
		tags: ["React", "Next.js", "Next-Auth.js", "TypeScript", "MongoDB", "Pusher"],
		imageUrl: "/messenger.png",
		link: "https://bigbruhh-messenger.vercel.app",
	},
	{
		title: "Shop punk",
		description:
			"An e-commerce store for technology goods. It has features like filtering, rating, and purchasing products, and also has an admin role to manage products, orders, and sales statistics.",
		tags: ["React", "Redux", "Tailwind", "Node.js", "MongoDB", "Firebase"],
		imageUrl: "/shop_punk.png",
		link: "https://bruhh-e-commece.onrender.com",
	},
	{
		title: "Cineverse",
		description:
			"A web application that provides information about movies, TV shows, and celebrities. It has features like filtering, sorting, and rating movies and TV shows.",
		tags: ["JavaScript", "React", "Redux", "Tailwind", "themovieDB API"],
		imageUrl: "/cineverse.png",
		link: "https://cineverse-bigbro.vercel.app",
	},
] as const

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Redux",
	"TailwindCSS",
	"Node.js",
	"Express.js",
	"MongoDB",
	"Next.js",
	"Zustand",
	"Shadcn.ui",
	"Nest.js",
	"PostgreSQL",
	"Prisma",
	"Redis",
	"Git",
	"Docker",
	"English",
] as const
