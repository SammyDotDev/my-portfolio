import SideNavigation from "./components/SideNavigation";
import About from "./components/main/About";
import Work from "./components/main/Work";
import Contact from "./components/main/Contact";
import { motion } from "framer-motion";
import Home from "./components/main/Home";
import { Spotify } from "react-spotify-embed";

const Index = () => {
  return (
    <div className="lg:flex lg:flex-row md:flex md:flex-col-reverse flex flex-col-reverse w-full h-full relative gap-5 max-w-8xl mx-auto">
      <motion.div
        className="side-main w-1/6 lg:ml-5 lg:flex-col lg:h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
      >
        <SideNavigation />
      </motion.div>
      <main className="main lg:flex lg:flex-row lg:justify-center lg:items-center md:w-full flex lg:pt-0 w-full ">
        <div className="scroll-container ">
          <Home />
          <About />
          <Work />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
