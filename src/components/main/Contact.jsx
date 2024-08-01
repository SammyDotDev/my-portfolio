import { delay, motion } from "framer-motion";
import CallIcon from "../../svg-icons/CallIcon";
import LinkedInIcon from "../../svg-icons/LinkedInIcon";
import MailIcon from "../../svg-icons/MailIcon";
import WhatsAppIcon from "../../svg-icons/WhatsAppIcon";

const contactData = [
  {
    id: 1,
    social: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/samuelokwudiashi",
    delay:0.3
  },
  {
    id: 2,
    social: "+234 704 210 2227",
    icon: <CallIcon />,
    delay:0.5
  },
  {
    id: 3,
    social: "+234 908 017 0598",
    icon: <WhatsAppIcon />,
    href: "https://wa.me/message/+2349080170598",
    delay:0.7
  },
  {
    id: 4,
    social: "okwudiashisamuel@gmail.com",
    icon: <MailIcon />,
    href: "samuelchukwunaza2@gmail.com",
    delay:0.9
  },
];

const Contact = () => {
  return (
    <motion.div
      className="container  lg:w-4/5 md:w-11/12 m-auto pl-10 pr-10 pb-5 pt-5 sm:w-11/12 w-11/12 h-5/6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <section className="nav-indicator">
        <p className="nav-indicator-text">CONTACT ME</p>
      </section>
      <section className="contact">
        <div className="connect lg:flex lg:flex-col lg:justify-around min-h-28 mb-8 md:mt-10 mt-10 lg:mt-0">
          <motion.h1
            className="heading lg:text-5xl
               md:text-4xl sm:text-4xl text-xl text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ scale: [0, 1.1, 1], opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            LET&apos;S CONNECT :)
          </motion.h1>
        </div>
        <div className="socials flex flex-col w-fit lg:justify-start lg:items-start justify-center items-center gap-3 m-auto lg:m-0">
          {contactData.map((item) => {
            return (
              <a
                href={item.href}
                key={item.id}
                target="_blank"
                className="hover:opacity-60 transition-s"
              >
                <motion.div
                  className="flex"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    ease: "easeOut",
                    duration: 1.5,
                    delay: item.delay,
                  }}
                >
                  <div className="mr-6 w-6 h-6 flex">{item.icon}</div>
                  <p className="normal  md:text-xl text-center lg:text-left">
                    {item.social}
                  </p>
                </motion.div>
              </a>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
