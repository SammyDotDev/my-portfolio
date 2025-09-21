import Lottie from "lottie-react";
import homeAnimation from "../../assets/cubes.json";
import { motion } from "framer-motion";
import MainWrapper from "../components/MainWrapper";
import TitleContainer from "../components/TitleContainer";
import { useEffect } from "react";
import Aos from "aos";
import ResumePdf from "../../assets/docs/Okwudiashi_Samuel_Resume_v2.pdf";

const Home = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<MainWrapper id={1}>
			<motion.div
				data-aos="flip-down"
				data-aos-easing="ease-out-cubic"
				data-aos-duration="2000"
				className="container lg:w-full px-7 pb-5 pt-5 w-full h-full"
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ ease: "easeOut", duration: 1 }}
			>
				<TitleContainer>HOME</TitleContainer>
				<div className="lg:flex lg:flex-col md:flex-col w-full md:flex flex flex-col justify-center items-center lg:mt-24">
					<motion.div
						className="col lg:flex lg:w-full lg:flex-col lg:justify-evenly md:w-full md:flex md:flex-col md:justify-center justify-center items-center"
						initial={{ y: -1000, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ ease: "easeOut", duration: 1.5 }}
					>
						<Lottie
							animationData={homeAnimation}
							loop={true}
							width={40}
							height={40}
							style={{
								width: 200,
								height: 200,
							}}
						/>
					</motion.div>
					<div className="col lg:flex lg:w-full lg:flex-col lg:justify-evenly md:w-full md:flex md:flex-col md:justify-center items-center mt-32">
						<div className="prgh-1 lg:flex lg:flex-col lg:justify-around min-h-28 mb-8 md:mt-10 mt-10 lg:mt-0 items-center">
							<motion.h1
								className="heading lg:text-5xl
                           md:text-4xl sm:text-4xl text-xl text-center lg:text-left"
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1, duration: 0.4 }}
							>
								Hello, I&apos;m Okwudiashi Samuel!
							</motion.h1>
							<motion.h4
								className="normal md:text-3xl text-center lg:text-left mt-10 font-bold"
								initial={{ opacity: 0, y: 150 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.5, duration: 1.5 }}
							>
								Welcome to my digital world!
							</motion.h4>
						</div>
						<div className="prgh-2 w-1/2 m-auto flex justify-center items-center">
							<motion.h4
								className="normal mb-8 md:text-xl text-base lg:text-base text-center lg:text-center"
								initial={{ opacity: 0, y: 200 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 2, duration: 1.5 }}
							>
								I’m a Mobile App Developer | Web Developer | UI/UX Designer, who
								aims at achieving seamless digital experiences in the digital
								world, where innovation knows no bounds.
							</motion.h4>
						</div>
						<a
							href={ResumePdf}
                            target="_blank"
                            rel="noopener noreferrer"
							className="md:flex"
						>
							<motion.button
								className="resume-btn w-full p-3 md:m-auto m-auto"
								initial={{ y: 1000, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ ease: "easeOut", duration: 1.5 }}
							>
								RESUME
							</motion.button>
						</a>
					</div>
				</div>
			</motion.div>
		</MainWrapper>
	);
};

export default Home;
