import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Briefcase, Home2, Messages2, Play, User } from "iconsax-reactjs";
import { CircleQuestionMark } from "lucide-react";
import { useNavigate, useNavigation } from "react-router-dom";

const navParams = [
  {
    id: 1,
    name: "Home",
    icon: <Home2 size="32" color="#6c757d" />,
    navigation: "/",
    delay: 0,
  },
  {
    id: 2,
    name: "About",
    icon: <User size="32" color="#6c757d" />,
    navigation: "/about",
    delay: 0.1,
  },
  {
    id: 3,
    name: "Work",
    icon: <Briefcase size="32" color="#6c757d" />,
    navigation: "/work",
    delay: 0.3,
  },
  {
    id: 4,
    name: "Contact",
    icon: <Messages2 size="32" color="#6c757d" />,
    navigation: "/contact",
    delay: 0.5,
  },
  {
    name: "3D",
    icon: <Play size="32" color="#6c757d" />,
    navigation: "/3d",
    delay: 0.7,
  },
];
const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

  const currentTheme = document.documentElement.dataset.theme;

  useEffect(() => {
    const sectionIds = navParams.map((item) => `section-${item.id}`);
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.6, // Trigger when 60% of section is visible
        },
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [navParams]);

  return (
    // <div className="side-nav-container">
    <motion.div className="side-nav w-1/6 flex flex-row lg:flex lg:flex-col md:flex md:flex-row h-full lg:h-full fixed rounded-2xl py-4">
      <div className="side-nav-container flex lg:flex lg:flex-col md:flex md:flex-row flex-row lg:h-80 lg:mt-auto lg:mb-auto lg:justify-around md:m-auto m-auto justify-center">
        {navParams.map((item) => {
          const sectionId = `section-${item.id}`;
          const isActive = activeSection === sectionId;
          let iconColor;

          if (currentTheme === "dark") {
            if (isActive) {
              iconColor = "#101314";
            } else {
              iconColor = "#efeceb";
            }
          } else {
            if (isActive) {
              iconColor = "#efeceb";
            } else {
              iconColor = "#101314";
            }
          }
          const evenId = item.id % 2 === 0 ? item.id : -item.id;
          let icon;
          switch (item.name) {
            case "Home":
              icon = <Home2 size="32" color={iconColor} />;
              break;
            case "About":
              icon = <User size="32" color={iconColor} />;
              break;
            case "Work":
              icon = <Briefcase size="32" color={iconColor} />;
              break;
            case "Contact":
              icon = <Messages2 size="32" color={iconColor} />;
              break;
            default:
              icon = <CircleQuestionMark size="32" color={iconColor} />;
          }

          const handleScroll = (e) => {
            e.preventDefault();
            const section = document.getElementById(sectionId);
            if (item.navigation === "/3d") {
              navigate("/3d");
              return;
            }
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
              return;
            }
          };
          const containerVariants = {
            hidden: {
              opacity: 0,
              x: -300,
            },
            visible: {
              opacity: 1,
              x: 0,

              transition: {
                delay: item.delay,
                duration: 1,
              },
            },
          };
          return (
            <div
              key={item.id}
              onClick={handleScroll}
              href={`#section-${item.id}`}
              style={{
                transform: `rotateZ(${evenId * 1}deg) scale(${evenId === 0 ? 1 : 0.93})`,
                transition: "0.3s ease-in-out",
              }}
            >
              {/* <NavLink key={item.id}> */}
              {/* {({ isActive }) => ( */}
              <motion.div
                className={`nav-icon ${isActive ? "nav-icon-active" : ""}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {icon}
                <p className={`nav-text ${isActive ? "nav-text-active" : ""}`}>
                  {item.name}
                </p>
              </motion.div>
              {/* </NavLink> */}
            </div>
          );
        })}
      </div>
    </motion.div>
    //{/* </div> */}
  );
};

export default SideNavigation;
