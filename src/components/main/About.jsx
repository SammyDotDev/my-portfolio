import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
import { skillStats } from "./data/skills.data";
import { expData } from "./data/exp.data";

const About = () => {
  return (
    <motion.div
      className="container lg:w-4/5 md:w-11/12 m-auto px-6 lg:px-10 pb-5 pt-5 sm:w-11/12 w-11/12 h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <section className="nav-indicator">
        <p className="nav-indicator-text">ABOUT ME</p>
      </section>
      <div className="row lg:flex lg:flex-row md:flex-col w-full md:flex flex flex-col">
        <div className="col-70 lg:flex lg:w-4/5 lg:flex-col lg:justify-evenly md:w-full md:flex md:flex-col md:justify-center">
          <div className="prgh-2 lg:w-4/5 w-full md:mt-6 lg:mt-auto lg:mb-auto m-auto">
            <motion.h4
              className="normal mb-8  md:text-xl text-base lg:text-base lg:text-left "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              My name is Okwudiashi Samuel Chukwunaza , a Software Developer,
              and a 4th year software engineering student at Bowen University.
              With a strong passion for programming and user experience
              enhancement, I am well experienced in web development and
              cross-platform Mobile application development, as well as product
              design. I am proficient in ReactJs as a frontend framework,
              through thorough practice of HTML, CSS, and Javascript, I possess
              strong knowledge of React Native as the cross-platform framework
              regarding mobile app development.
            </motion.h4>
          </div>
          <div className="skill-stats lg:p-5 lg:w-11/12 w-full pt-5 lg:mb-0 md:mb-6 mb-6">
            <div className="info-header m-5">
              <h4 className="info-header-text">SKILLS</h4>
            </div>
            <motion.div className="skills-container">
              <ul className="skill-ul">
                {skillStats.map((item) => {
                  const completedClassName = `barCompleted-${item.mastery}`;
                  return (
                    <motion.div
                      className="skill-li lg:flex lg:flex-row flex flex-col"
                      key={item.id}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        ease: "easeOut",
                        duration: 1.5,
                        delay: item.delay,
                      }}
                    >
                      <li className="skill-name">{item.name}</li>

                    </motion.div>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
        <div className="col-30 lg:flex lg:w-2/6 lg:flex-col lg:justify-evenly md:w-full md:flex md:flex-col md:justify-center lg:overflow-scroll overflow-visible lg:mt-0 mt-5">
          <aside className="exp-tab lg:flex lg:flex-col w-full p-5 h-max lg:overflow-scroll">
            <div className="info-header exp">
              <h4 className="info-header-text">EXPERIENCE</h4>
            </div>
            <div className="exp-container lg:p-10 p-5">
              <ul className="exp-ul">
                {expData.map((item) => {
                  return (
                    <motion.div
                      key={item.id}
                      className="exp-texts flex flex-col mb-10"
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
              <div className="education">
                <h4 className="info-header-text">EDUCATION</h4>
                <h5 className="edu-school">Bowen University, Iwo</h5>
                <h6 className="edu-deg">
                  Bachelor of Science - Software Engineering
                </h6>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
