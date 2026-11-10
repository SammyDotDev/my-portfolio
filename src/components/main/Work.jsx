import { motion } from "framer-motion";
import MainWrapper from "../components/MainWrapper";
import TitleContainer from "../components/TitleContainer";
import { useEffect, useState } from "react";
import Aos from "aos";
import { workData } from "./data/work.data";
import WorkCard from "../components/WorkCard";

const Work = () => {
  const [scale, setScale] = useState("scale-100");
  const [selected, setSelected] = useState(null);

  const onMouseEnter = (s) => {
    setScale("scale-90");
  };

  const onMouseLeave = () => {
    setScale("scale-100");
  };

  useEffect(() => {
    if (selected) {
      setScale("scale-90");
    } else {
      setScale("scale-100");
    }
  }, [selected]);
  return (
    <MainWrapper id={3}>
      <motion.div
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
          {workData.map((work, index) => (
            <WorkCard
              key={index}
              work={work}
              workData={workData}
              // containerClassName={scale}
              onMouseEnter={(s) => setScale("scale-110")}
              onMouseLeave={onMouseLeave}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </motion.div>
      </motion.div>
    </MainWrapper>
  );
};

export default Work;
