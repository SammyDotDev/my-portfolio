import { NavLink } from "react-router-dom";
import AboutIcon from "../svg-icons/AboutIcon";
import ContactIcon from "../svg-icons/ContactIon";
import HomeIcon from "../svg-icons/HomeIcon";
import WorkIcon from "../svg-icons/WorkIcon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navParams = [
	{
		id: 1,
		name: "Home",
		icon: <HomeIcon />,
		navigation: "/",
		delay: 0.3,
	},
	{
		id: 2,
		name: "About",
		icon: <AboutIcon />,
		navigation: "/about",
		delay: 0.5,
	},
	{
		id: 3,
		name: "Work",
		icon: <WorkIcon />,
		navigation: "/work",
		delay: 0.7,
	},
	{
		id: 4,
		name: "Contact",
		icon: <ContactIcon />,
		navigation: "/contact",
		delay: 0.9,
	},
];
const SideNavigation = () => {
	const [activeSection, setActiveSection] = useState(null);

	useEffect(() => {
		const sectionIds = navParams.map((item) => `section-${item.id}`);
		const observers = [];

		sectionIds.forEach((id) => {
			const section = document.getElementById(id);
			if (!section) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setActiveSection(id);
					}
				},
				{
					root: null,
					rootMargin: "0px",
					threshold: 0.6, // Trigger when 60% of section is visible
				}
			);

			observer.observe(section);
			observers.push(observer);
		});

		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	}, [navParams]);

	return (
		// <div className="side-nav-container">
		<motion.div className="side-nav  w-1/6 flex flex-row lg:flex lg:flex-col md:flex md:flex-row h-full lg:h-full fixed rounded-2xl py-4">
			<div className="side-nav-container flex lg:flex lg:flex-col md:flex md:flex-row flex-row lg:h-80 lg:mt-auto lg:mb-auto lg:justify-around md:m-auto m-auto justify-center">
				{navParams.map((item) => {
					const sectionId = `section-${item.id}`;
					const isActive = activeSection === sectionId;
					const handleScroll = (e) => {
						e.preventDefault();
						const section = document.getElementById(sectionId);
						if (section) {
							section.scrollIntoView({ behavior: "smooth" });
						}
					};
					const containerVariants = {
						hidden: {
							opacity: 0,
							x: -300,
						},
						visible: {
							opacity: 1,
							x: 0,
							transition: {
								delay: item.delay,
								duration: 1,
							},
						},
					};
					return (
						<div
							key={item.id}
							onClick={handleScroll}
							href={`#section-${item.id}`}
						>
							{/* <NavLink key={item.id}> */}
							{/* {({ isActive }) => ( */}
							<motion.div
								className={`nav-icon ${isActive ? "nav-icon-active" : ""}`}
								variants={containerVariants}
								initial="hidden"
								animate="visible"
							>
								{item.icon}
								<p className="nav-text">{item.name}</p>
							</motion.div>
							{/* </NavLink> */}
						</div>
					);
				})}
			</div>
		</motion.div>
		//{/* </div> */}
	);
};

export default SideNavigation;
