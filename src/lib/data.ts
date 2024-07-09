import React from 'react';
import { PiGraduationCap } from 'react-icons/pi';
import { FaReact } from 'react-icons/fa';
import { LiaGraduationCapSolid } from 'react-icons/lia';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experienceData = [
  {
    title: 'Start university',
    location: 'Hanoi, VN',
    description: 'I started my Mechatronics Engineering major at Hanoi University of Science and Technology in September 2018.',
    icon: React.createElement(PiGraduationCap),
    date: '2018',
  },
  {
    title: 'Start learning programming',
    location: 'Hanoi, VN',
    description:
      'I started learning to code in late 2022. After mastering the basics such as C++ programming, Data structures & Algorithms, Object-Oriented Programming, I decided to be a full-stack developer. I started learning about web development at the end of 2023.',
    icon: React.createElement(FaReact),
    date: '2022',
  },
  {
    title: 'Graduate university',
    location: 'Hanoi, VN',
    description: "I'm about to graduate from university in July 2024",
    icon: React.createElement(LiaGraduationCapSolid),
    date: 'Jul, 2024',
  },
] as const;

export const projectsData = [
  {
    title: 'Messenger clone',
    description: 'A real-time chat app where you can log in with your Google or Github account and start chatting with your friends. You can send messages or pictures and also create group chats.',
    tags: ['React', 'Next.JS', 'Next-Auth.JS', 'TypeScript', 'MongoDB', 'Pusher'],
    imageUrl: '/messenger.png',
    link: 'https://bigbruhh-messenger.vercel.app',
  },
  {
    title: 'Shop punk',
    description: 'An e-commerce store for technology goods. It has features like filtering, rating, and purchasing products, and also has an admin role to manage products, orders, and sales statistics.',
    tags: ['React', 'Redux', 'Tailwind', 'Node.JS', 'MongoDB', 'Firebase'],
    imageUrl: '/shop_punk.png',
    link: 'https://bruhh-e-commece.onrender.com',
  },
  {
    title: 'Cineverse',
    description: 'A web application that provides information about movies, TV shows, and celebrities. It has features like filtering, sorting, and rating movies and TV shows.',
    tags: ['JavaScript', 'React', 'Redux', 'Tailwind', 'themovieDB API'],
    imageUrl: '/cineverse.png',
    link: 'https://cineverse-bigbro.vercel.app',
  },
  {
    title: 'Weather app',
    description: 'A public web application to get weather and weather forecasts of any city in the world by name.',
    tags: ['JavaScript', 'React', 'Redux', 'openweatherAPI', 'rapidAPI'],
    imageUrl: '/weather-app.png',
    link: 'https://anhbigbrother.github.io/weather-app',
  },
] as const;

export const skillsData = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Node.js', 'Express.js', 'TailwindCSS', 'MongoDB', 'Mongoose', 'Next.js', 'Next-Auth.js', 'Git', 'Docker', 'English'] as const;
