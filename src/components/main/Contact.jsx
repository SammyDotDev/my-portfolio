import { motion } from "framer-motion";
import CallIcon from "../../svg-icons/CallIcon";
import LinkedInIcon from "../../svg-icons/LinkedInIcon";
import MailIcon from "../../svg-icons/MailIcon";
import WhatsAppIcon from "../../svg-icons/WhatsAppIcon";
import MainWrapper from "../components/MainWrapper";
import TitleContainer from "../components/TitleContainer";
import { useEffect } from "react";
import Aos from "aos";
import React from "react";

const contactData = [
  {
    id: 1,
    social: "LinkedIn",
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/samuelokwudiashi",
    delay: 0.3,
  },
  {
    id: 2,
    social: "+234 704 210 2227",
    icon: <WhatsAppIcon />,
    delay: 0.5,
  },
  {
    id: 3,
    social: "nazacodes@gmail.com",
    icon: <MailIcon />,
    href: "mailto: nazacodes@gmail.com",
    delay: 0.7,
  },
];

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <MainWrapper id={4}>
      <motion.div
        // data-aos="fade-up"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        className="container lg:w-full md:w-full m-auto pl-10 pr-10 pb-5 pt-5 sm:w-11/12 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <TitleContainer>CONTACT ME</TitleContainer>
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
                    className="flex items-center"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      ease: "easeOut",
                      duration: 1.5,
                      delay: item.delay,
                    }}
                  >
                    <div className={`w-6 h-6 flex ${item.id !== 2 && "mr-6"}`}>
                      {React.cloneElement(item.icon, {
                        color: "#1b4d22",
                      })}
                    </div>
                    {item.id === 2 && (
                      <div className="flex items-center">
                        <p className="text-white mx-2"> | </p>
                        <CallIcon />
                      </div>
                    )}
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
    </MainWrapper>
  );
};

export default Contact;
