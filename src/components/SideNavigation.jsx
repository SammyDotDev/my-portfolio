import AboutIcon from "../svg-icons/AboutIcon";
import ContactIcon from "../svg-icons/ContactIon";
import HomeIcon from "../svg-icons/HomeIcon";
import WorkIcon from "../svg-icons/WorkIcon";

const navParams = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
  },
  { id: 2, name: "About", icon: <AboutIcon /> },
  {
    id: 3,
    name: "Work",
    icon: <WorkIcon />,
  },
  {
    id: 4,
    name: "Contact",
    icon: <ContactIcon />,
  },
];
const SideNavigation = () => {
  return (
    <div className="side-nav">
      <div className="side-nav-container">
        {navParams.map((item) => {
          return (
            <div key={item.id} className="nav-icon">
              {item.icon}
              <p className="nav-text">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavigation;
