    import { Route, Routes } from "react-router-dom";
import Home from "./components/main/Home";
import SideNavigation from "./components/SideNavigation";
import About from "./components/main/About";
import Work from "./components/main/Work";
import Contact from "./components/main/Contact";
function App() {
  return (
    <div className="app lg:flex lg:flex-row md:flex md:flex-col-reverse flex flex-col-reverse w-full h-screen">
      <SideNavigation />
      <main className="main lg:flex lg:flex-row lg:justify-center lg:items-center md:w-full h-fit flex lg:pt-0 pt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
