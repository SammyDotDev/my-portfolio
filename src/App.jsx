import { Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import SideNavigation from "./components/SideNavigation";
import About from "./components/main/About";
import Work from "./components/main/Work";
import Contact from "./components/main/Contact";
import { motion } from "framer-motion";

function App() {
	return (
		<div className="app lg:flex lg:flex-row md:flex md:flex-col-reverse flex flex-col-reverse w-full h-full relative">
			<motion.div
				className="side-main w-1/6"
				initial={{ y: 1000, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ ease: "easeOut", duration: 1 }}
			>
				<SideNavigation />
			</motion.div>
			<main className="main lg:flex lg:flex-row lg:justify-center lg:items-center md:w-full flex lg:pt-0 w-full">
				<div className="scroll-container w-full">
					<Home />
					<About />
					<Work />
					<Contact />
				</div>
				{/* <Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/work" element={<Work />} />
					<Route path="/contact" element={<Contact />} />
				</Routes> */}
			</main>
		</div>
	);
}

export default App;
