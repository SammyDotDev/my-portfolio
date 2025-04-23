import { motion } from "framer-motion";
import MainWrapper from "../components/MainWrapper";
import TitleContainer from "../components/TitleContainer";
import { useEffect } from "react";
import Aos from "aos";

const Work = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<MainWrapper id={3}>
			<motion.div
				data-aos="fade-up"
                data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				className="container lg:w-full md:w-full pl-10 pr-10 pb-5 pt-5 sm:w-11/12 w-full h-full"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: "easeOut", duration: 1 }}
			>
				<TitleContainer>MY WORK</TitleContainer>
				<motion.div
					className="grid h-auto min-h-full grid-cols-4 lg:grid-rows-3 md:grid-rows-4 sm:grid-rows-8 gap-3 mt-10"
					// initial={{ x: 100, opacity: 0 }}
					// animate={{ x: 0, opacity: 1 }}
					// transition={{ ease: "easeOut", duration: 1 }}
				></motion.div>
			</motion.div>
		</MainWrapper>
	);
};

export default Work;
