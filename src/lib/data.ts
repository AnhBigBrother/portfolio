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
    description: 'I started studying Mechatronics engineering at Hanoi University of Science and Technology in September 2018.',
    icon: React.createElement(PiGraduationCap),
    date: '2018',
  },
  {
    title: 'Start learning programming',
    location: 'Hanoi, VN',
    description:
      'I started learning to code in late 2022. After mastering the basic such as C++ programming, data structures & algorithms, OOP, I decided to be a full-stack developer. I started learning HTML, CSS, JavaScript, React, Node.js, MongoDB, etc at the end of 2023.',
    icon: React.createElement(FaReact),
    date: '2022',
  },
  {
    title: 'Graduate university',
    location: 'Hanoi, VN',
    description: "I'm about to graduate in July 2024",
    icon: React.createElement(LiaGraduationCapSolid),
    date: 'Jul, 2024',
  },
] as const;

export const projectsData = [
  {
    title: 'Shop punk',
    description: 'An e-commerce store for technology goods. It has features like filtering, rating, and purchasing products, and also has an admin role to manage products, orders, and sales statistics.',
    tags: ['React', 'Redux', 'Tailwind', 'Node.JS', 'MongoDB', 'Firebase'],
    imageUrl: '/shop_punk.png',
  },
  {
    title: 'Cineverse',
    description: 'A web application about the information on movies, TV shows with the API from themoviedb.  It has features like filtering, sorting, rating movies and TVshow.',
    tags: ['React', 'Redux', 'Tailwind', 'themovieDB API'],
    imageUrl: '/cineverse.png',
  },
  {
    title: 'Weather app',
    description: 'A public web application to get weather and weather forecast of any city in the world by name.',
    tags: ['HTML', 'CSS', 'React', 'Redux', 'openweatherAPI', 'rapidAPI'],
    imageUrl: '/weather-app.png',
  },
] as const;

export const skillsData = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Node.js', 'Express.js', 'TailwindCSS', 'MongoDB', 'Mongoose', 'Next.js', 'Git', 'Github', 'Docker'] as const;
