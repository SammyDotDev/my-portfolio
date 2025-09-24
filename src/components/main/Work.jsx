import { motion } from "framer-motion";
import MainWrapper from "../components/MainWrapper";
import TitleContainer from "../components/TitleContainer";
import { useEffect } from "react";
import Aos from "aos";
import { workData } from "./data/work.data";
import WorkCard from "../components/WorkCard";

const Work = () => {
	useEffect(() => {
		// Aos.init();
	}, []);
	return (
		<MainWrapper id={3}>
			<motion.div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-easing="ease-in"
				className="container lg:w-full md:w-full pl-10 pr-10 pb-5 pt-5 sm:w-11/12 w-full h-full"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ ease: "easeOut", duration: 1 }}
			>
				<TitleContainer>MY WORK</TitleContainer>
				<motion.div
					className="flex flex-wrap h-auto min-h-ful gap-3 mt-10 w-full justify-center"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ ease: "easeOut", duration: 1 }}
				>
					{workData.map((work) => (
						<WorkCard work={work} />
					))}
				</motion.div>
			</motion.div>
		</MainWrapper>
	);
};

export default Work;
