import Lottie from "lottie-react";
import mobileGif from "../../assets/mobile-gif.json";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			className="container lg:w-4/5 md:w-11/12 m-auto px-7 pb-5 pt-5 sm:w-11/12 w-11/12 h-full"
			initial={{ x: 100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ ease: "easeOut", duration: 1 }}
		>
			<section className="nav-indicator">
				<p className="nav-indicator-text">HOME</p>
			</section>
			<div className="row lg:flex lg:flex-row md:flex-col w-full md:flex flex flex-col">
				<div className="col lg:flex lg:w-1/2 lg:flex-col lg:justify-evenly md:w-full md:flex md:flex-col md:justify-center">
					<div className="prgh-1 lg:flex lg:flex-col lg:justify-around min-h-28 mb-8 md:mt-10 mt-10 lg:mt-0">
						<motion.h1
							className="heading lg:text-5xl
               md:text-4xl sm:text-4xl text-xl text-center lg:text-left"
							initial={{ opacity: 0 }}
							animate={{ scale: [0, 1.1, 1], opacity: 1 }}
							transition={{ delay: 1, duration: 0.4 }}
						>
							Hello, I&apos;m Okwudiashi Samuel!
						</motion.h1>
						<motion.h4
							className="normal md:text-xl text-center lg:text-left"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.5, duration: 1.5 }}
						>
							Welcome to my digital world!
						</motion.h4>
					</div>
					<div className="prgh-2">
						<motion.h4
							className="normal mb-8  md:text-xl text-base lg:text-base lg:text-left text-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 2, duration: 1.5 }}
						>
							I’m a Mobile App Developer | Web Developer | UI/UX Designer, who
							aims at achieving seamless digital experiences in the digital
							world, where innovation knows no bounds.
						</motion.h4>
					</div>
					<a
						href="/myResume.pdf"
						download={"SamuelResume.pdf"}
						className="md:flex"
					>
						<motion.button
							className="resume-btn lg:w-4/5 md:w-4/5 w-full border-none p-3 md:m-auto m-auto"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: "easeOut", duration: 1, delay: 2.5 }}
						>
							RESUME
						</motion.button>
					</a>
				</div>
				<div className="col lg:flex lg:w-1/2 lg:flex-col lg:justify-evenly md:w-full md:flex md:flex-col md:justify-center">
					<Lottie
						animationData={mobileGif}
						loop={true}
						width={100}
						height={100}
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default Home;
