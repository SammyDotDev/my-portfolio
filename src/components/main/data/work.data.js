const path = "./projects/";

export const workData = [
	{
		id: 1,
		title: "FindFuel",
		description:
			"A comprehensive fuel station finder mobile application that helps users locate nearby gas stations, compare fuel prices, and get real-time availability updates. Features include interactive maps, price comparisons, user reviews, favorite stations, and route optimization to the nearest or cheapest fuel options.",
		image: `${path}/findfuel/findfuel1.png`,
		subImages: [
			`${path}/findfuel/findfuel1.png`,
			`${path}/findfuel/findfuel2.png`,
			`${path}/findfuel/findfuel3.png`,
			`${path}/findfuel/findfuel4.png`,
			`${path}/findfuel/findfuel5.png`,
		],
		techStack: [
			"React Native",
			"TypeScript",
			"Firebase",
			"Expo",
			"Tailwind CSS",
			"React",
		],
		githubLink: "https://github.com/SammyDotDev/findfuel",
		liveLink: null,
		featured: true,
	},
	{
		id: 2,
		title: "Student Advisory System",
		description:
			"A modern web application designed to streamline academic advising processes for educational institutions. The system enables students to schedule appointments with advisors, track academic progress, manage course requirements, and receive personalized academic guidance. Features include appointment scheduling, progress tracking, requirement checklists, and communication tools between students and advisors.",
		image: `${path}/student-advisory/studentad1.png`,
		subImages: [
			`${path}/student-advisory/studentad1.png`,
			`${path}/student-advisory/studentad2.png`,
			`${path}/student-advisory/studentad3.png`,
			`${path}/student-advisory/studentad4.png`,
		],
		techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
		githubLink: "https://github.com/SammyDotDev/student-advisory-system",
		liveLink: null,
		featured: false,
	},
	{
		id: 3,
		title: "Airbnb Clone",
		description:
			"A feature-rich mobile application that replicates the core functionality of Airbnb. Users can browse property listings, view detailed property information with image galleries, make bookings, and manage their reservations. The app includes advanced search filters, interactive maps, user authentication, booking management, and a clean, intuitive interface that matches modern design standards.",
		image: `${path}/airbnb-clone/airbnb1.jpg`,
		subImages: [
			`${path}/airbnb-clone/airbnb1.jpg`,
			`${path}/airbnb-clone/airbnb2.jpg`,
			`${path}/airbnb-clone/airbnb3.jpg`,
			`${path}/airbnb-clone/airbnb4.jpg`,
			`${path}/airbnb-clone/airbnb5.jpg`,
		],
		techStack: ["React Native", "TypeScript", "Clerk", "Expo"],
		githubLink: "https://github.com/SammyDotDev/airbnb-clone",
		liveLink: null,
		featured: true,
	},
	{
		id: 4,
		title: "TaskNest",
		description:
			"A comprehensive full-stack task management mobile application built for enhanced productivity and team collaboration. TaskNest allows users to create, organize, and track tasks with advanced features like priority levels, due dates, categories, and progress tracking. The app includes real-time synchronization, team collaboration tools, file attachments, notifications, and detailed analytics to help users and teams stay organized and productive.",
		image: `${path}/tasknest/tasknest1.PNG`,
		subImages: [
			`${path}/tasknest/tasknest1.PNG`,
			`${path}/tasknest/tasknest2.PNG`,
			`${path}/tasknest/tasknest3.PNG`,
			`${path}/tasknest/tasknest4.PNG`,
			`${path}/tasknest/tasknest5.PNG`,
		],
		techStack: [
			"React Native",
			"TypeScript",
			"Expo",
			"Supabase",
			"Tailwind CSS",
		],
		githubLink: "https://github.com/SammyDotDev/tasknest",
		liveLink: null,
		featured: false,
	},
];
