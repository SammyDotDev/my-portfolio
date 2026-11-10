import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from ".";
import ThreeD from "./components/main/3d";

function App() {
  let currentTheme = document.documentElement.dataset.theme;
  const [themeText, setThemeText] = useState(
    currentTheme === "dark" ? "LIGHT" : "DARK",
  );

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      currentTheme = "light";
      setThemeText("DARK");
    } else {
      currentTheme = "dark";
      setThemeText("LIGHT");
    }
    document.documentElement.dataset.theme = currentTheme;
  };

  if (!themeText) {
    return null;
  }
  return (
    <div className="app">
      <motion.button
        onClick={toggleTheme}
        className="resume-btn py-3 px-7 m-auto w-full sm:w-full md:w-full lg:w-auto"
        initial={{ y: 1000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        TOGGLE {themeText} MODE
      </motion.button>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/3d" element={<ThreeD />} />
      </Routes>
    </div>
  );
}

export default App;
