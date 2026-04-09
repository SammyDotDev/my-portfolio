import LottieDefault from "lottie-react";
const Lottie = LottieDefault.default || LottieDefault;
import homeAnimation from "../../assets/cubes.json";
import { motion } from "framer-motion";
import MainWrapper from "../components/MainWrapper";
import TitleContainer from "../components/TitleContainer";
import { useEffect } from "react";
import Aos from "aos";
import ResumePdf from "../../assets/docs/Okwudiashi_Samuel_Resume.pdf";
import { useTypewriterOnce } from "../../utils";

const Home = () => {
	useEffect(() => {
		Aos.init();
	}, []);

  const { display, cursorOn } = useTypewriterOnce("Sammy", 120, 600);

	return (
		<MainWrapper id={1}>
			<motion.div
				// data-aos="flip-down"
				// data-aos-easing="ease-out-cubic"
				// data-aos-duration="2000"
				className="container lg:w-full px-7 pb-5 pt-5 w-full"
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
								Hello, I&apos;m{" "}
								<motion.h1 className={"font-extrabold text-[#aceeb4]"}>
									{/* Sammy| */}
									{display}
									<span aria-hidden="true">{cursorOn ? "|" : "\u00A0"}</span>
								</motion.h1>
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
						<div className="prgh-2 sm:w-[90%] md:w-full lg:w-1/2 m-auto flex justify-center items-center">
							<motion.h4
								className="normal mb-8 md:text-xl text-base lg:text-base text-center lg:text-center"
								initial={{ opacity: 0, y: 200 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 2, duration: 1.5 }}
							>
								I’m a Software Engineer, and a software engineering grad. I’m
								passionate about creating high-end and impactful software
								applications and being a part of great projects that contribute
								to different levels of enterprises
							</motion.h4>
						</div>
						<a
							href={ResumePdf}
							target="_blank"
							rel="noopener noreferrer"
							className="md:flex"
						>
							<motion.button
								className="resume-btn w-full py-3 px-7 md:m-auto m-auto rounded-full"
								initial={{ y: 1000, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ ease: "easeOut", duration: 1.5 }}
							>
								MY RESUME
							</motion.button>
						</a>
					</div>
				</div>
			</motion.div>
		</MainWrapper>
	);
};

export default Home;
