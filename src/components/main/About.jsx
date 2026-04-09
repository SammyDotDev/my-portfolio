import { motion } from "framer-motion";
import { skillStats } from "./data/skills.data";
import { expData } from "./data/exp.data";
import MainWrapper from "../components/MainWrapper";
import TitleContainer from "../components/TitleContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, ScrollToPlugin, TextPlugin);
// gsap.registerEffect({
// 	name: "fade",
// 	effect: (targets, config) => {
// 		return gsap.to(targets, { duration: config.duration, opacity: 0 });
// 	},
// 	defaults: { duration: 2 }, //defaults get applied to any "config" object passed to the effect
// 	extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
// });

// // now we can use it like this:
// gsap.from(".container", {
//     scrollTrigger: ".container",
//     x: 500,
// });

// gsap.to(".container", {
// 	scrollTrigger: ".container", // start the animation when ".container" enters the viewport (once)
// 	x: -500,
// });

const About = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<MainWrapper id={2}>
			<motion.div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				className="container lg:w-full md:w-full px-6 lg:px-10 pb-5 pt-5 sm:w-11/12 w-full h-full"
			>
				<TitleContainer>ABOUT ME</TitleContainer>
				<div className="row lg:flex lg:flex-row md:flex-col w-full md:flex flex flex-col">
					<div className="col-70 lg:flex lg:w-4/5 lg:flex-col lg:justify-evenly md:w-full md:flex md:flex-col md:justify-center">
						<div className="prgh-2 lg:w-4/5 w-full md:mt-6 lg:mt-auto lg:mb-auto m-auto">
							<motion.h4
								className="normal mb-8  md:text-xl text-lg lg:text-lg lg:text-left"
								style={{
									lineHeight: 2,
								}}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1, duration: 1 }}
							>
								My name is Okwudiashi Samuel Chukwunaza , a Software Developer,
								and a graduate of software engineering from Bowen University,
								Iwo. With a strong passion for programming and user experience
								enhancement, I am well experienced in web development and
								cross-platform Mobile application development, as well as
								product design. I am proficient in ReactJs as a frontend
								framework, through thorough practice of HTML, CSS, and
								Javascript, I possess strong knowledge of React Native as the
								cross-platform framework regarding mobile app development.
							</motion.h4>
						</div>
						<div className="skill-stats lg:p-5 lg:w-11/12 w-full pt-5 lg:mb-0 md:mb-6 mb-6 rounded-[50px]">
							<div className="info-header m-5 rounded-full">
								<h4 className="info-header-text">SKILLS</h4>
							</div>
							<motion.div className="skills-container">
								<ul className="skill-ul">
									{skillStats.map((item) => {
										return (
											<motion.div
												className="skill-li lg:flex lg:flex-row flex flex-col rounded-full bg-[#fff]"
												key={item.id}
												initial={{ x: -100, opacity: 0 }}
												animate={{ x: 0, opacity: 1 }}
												transition={{
													ease: "easeOut",
													duration: 1.5,
													delay: item.delay,
												}}
											>
												<li className="skill-name text-[#000]">{item.name}</li>
											</motion.div>
										);
									})}
								</ul>
							</motion.div>
						</div>
					</div>
					<div className="col-30 lg:flex lg:w-2/6 lg:flex-col lg:justify-evenly md:w-full md:flex md:flex-col md:justify-center lg:overflow-scroll overflow-visible lg:mt-0 mt-5">
						<aside className="exp-tab lg:flex lg:flex-col w-full p-5 h-full lg:overflow-scroll rounded-[50px]">
							<div className="info-header exp rounded-full">
								<h4 className="info-header-text">EXPERIENCE</h4>
							</div>
							<div className="exp-container lg:p-">
								<ul className="exp-ul h-[50vh] rounded-3xl p-3  overflow-scroll border-2 border-[#1c1c1c] my-3">
									{expData.map((item, index) => {
										return (
											<motion.div
												key={item.id}
												className={`exp-texts flex flex-col mb-10 p-2 ${
													index != expData.length - 1 &&
													"border-dashed border-b-4 border-[#fff]"
												}`}
												initial={{ x: 100, opacity: 0 }}
												animate={{ x: 0, opacity: 1 }}
												transition={{
													ease: "easeOut",
													duration: 1.5,
													delay: item.delay,
												}}
											>
												<li className="normal">{item.description}</li>
												<p className="duration">
													- {item.timeStart} - {item.timeEnd}
												</p>
											</motion.div>
										);
									})}
								</ul>
								<div className="education border-t-4 border-[#aceeb4] pt-4">
									<h4 className="info-header-text">EDUCATION</h4>
									<h5 className="edu-school text-white">
										Bowen University, Iwo
									</h5>
									<h6 className="edu-deg text-[#aceeb4]">
										Bachelor of Science - Software Engineering
									</h6>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</motion.div>
		</MainWrapper>
	);
};

export default About;
