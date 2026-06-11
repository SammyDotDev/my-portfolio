import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Home from "./components/main/Home";
import Work from "./components/main/Work";
import SideNavigation from "./components/SideNavigation";

function App() {
	return (
		<div className="app">
			<div className="lg:flex lg:flex-row md:flex md:flex-col-reverse flex flex-col-reverse w-full h-full relative gap-5 max-w-8xl mx-auto">
				<div className="side-main w-1/6  lg:ml-5 rounded-2xl lg:flex-col lg:h-screen">
					<SideNavigation />
				</div>
				<main className="main lg:flex lg:flex-row lg:justify-center lg:items-center md:w-full flex lg:pt-0 w-full ">
					<div className="scroll-container ">
						<Home />
						<About />
						<Work />
						<Contact />
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
