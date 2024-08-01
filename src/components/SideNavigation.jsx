import { NavLink } from "react-router-dom";
import AboutIcon from "../svg-icons/AboutIcon";
import ContactIcon from "../svg-icons/ContactIon";
import HomeIcon from "../svg-icons/HomeIcon";
import WorkIcon from "../svg-icons/WorkIcon";
import { motion } from "framer-motion";

const navParams = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
    navigation: "/",
    delay: 0.3,
  },
  {
    id: 2,
    name: "About",
    icon: <AboutIcon />,
    navigation: "/about",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Work",
    icon: <WorkIcon />,
    navigation: "/work",
    delay: 0.7,
  },
  {
    id: 4,
    name: "Contact",
    icon: <ContactIcon />,
    navigation: "/contact",
    delay: 0.9,
  },
];
const SideNavigation = () => {
  return (
    <div className="side-nav flex flex-row w-full lg:flex lg:flex-col md:flex md:flex-row lg:w-1/6 md:w-full h-1/6 lg:h-auto">
      <div className="side-nav-container flex lg:flex lg:flex-col md:flex md:flex-row flex-row lg:h-80 lg:mt-auto lg:mb-auto lg:justify-around md:m-auto m-auto">
        {navParams.map((item) => {
          const containerVariants = {
            hidden: {
              opacity: 0,
              x: -200,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                delay: item.delay,
                duration: 0.3,
                // type: "spring",
              },
            },
          };
          return (
            <NavLink key={item.id} to={item.navigation}>
              {({ isActive }) => (
                <motion.div
                  className={`nav-icon ${isActive ? "nav-icon-active" : ""}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {item.icon}
                  <p className="nav-text">{item.name}</p>
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavigation;
