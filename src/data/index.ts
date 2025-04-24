import React from "react";
import { PiGraduationCap } from "react-icons/pi";
import { LuCode2 } from "react-icons/lu";
import { IconBaseProps } from "react-icons";

type TLink = {
	name: string;
	hash: string;
};

type TExperience = {
	title: string;
	location: string;
	description: string;
	date: string;
	icon: React.FunctionComponentElement<IconBaseProps>;
};
type TProject = {
	title: string;
	description: string;
	imageUrl: string;
	tags: string[];
	link: string;
};

export const links: TLink[] = [
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
] as const;

export const currentEmail = "tienanh.x132@gmail.com"

export const experienceData: TExperience[] = [
	{
		title: "Start university",
		location: "Hanoi, VN",
		description:
			"Started studying at Hanoi University of Science and Technology (Mechatronic Engineering).",
		icon: React.createElement(PiGraduationCap),
		date: "2018 - 2024",
	},
	{
		title: "Software Developer",
		location: "Hanoi, VN",
		description: "Software Developer at JITS Innovation Labs LLC.",
		icon: React.createElement(LuCode2),
		date: "Aug - Oct, 2024",
	},
	// {
	// 	title: "Graduate university",
	// 	location: "Hanoi, VN",
	// 	description:
	// 		"Graduated from Hanoi University of Science and Technology (Mechatronic Engineering - Intelligent Mechatronic Systems).",
	// 	icon: React.createElement(LiaGraduationCapSolid),
	// 	date: "Seb, 2024",
	// },
] as const;

export const projectsData: TProject[] = [
	{
		title: "Enlighten",
		description:
			"A social media platform for people to share their philosophies, knowledge, life views, etc. It's a social network of freedom, openness and uncensored.",
		tags: ["Next.js", "Shadcn-ui", "Zustand", "TypeScript", "Golang", "PostgreSQL"],
		imageUrl: "/enlighten.png",
		link: "https://enlighten-wololo.vercel.app",
	},
	{
		title: "Messenger",
		description:
			"A real-time chat app where you can log in with your Google or Github account and start chatting with your friends. You can send messages or pictures and also create group chats.",
		tags: ["React", "Next.js", "Next-Auth.js", "TypeScript", "MongoDB", "Pusher"],
		imageUrl: "/messenger.png",
		link: "https://messenger-hehe.vercel.app",
	},
	{
		title: "Shop punk",
		description:
			"An e-commerce store for technology goods. It has features like filtering, rating, ordering products, etc. It also has an admin role to manage products, orders, and sales statistics.",
		tags: ["React", "Redux", "Tailwind", "Node.js", "MongoDB", "Firebase"],
		imageUrl: "/shop_punk.png",
		link: "https://shop-punk-rock.onrender.com",
	},
	{
		title: "Cineverse",
		description:
			"A web application that provides information about movies, TV shows, and celebrities. It also has features like filtering, sorting, and rating movies and TV shows.",
		tags: ["JavaScript", "React", "Redux", "Tailwind", "themovieDB API"],
		imageUrl: "/cineverse.png",
		link: "https://cineverse-wololo.vercel.app",
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"Node.js",
	"React",
	"Next.js",
	"TailwindCSS",
	"Shadcn.ui",
	"Express.js",
	"MongoDB",
	"Nest.js",
	"Prisma",
	"Golang",
	"gRPC",
	"PostgreSQL",
	"Sqlc",
	"Data structure",
	"Algorithm",
	"Git",
	"Docker",
	"English",
] as const;
