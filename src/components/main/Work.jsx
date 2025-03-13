import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      className="container lg:w-4/5 md:w-11/12l m-auto pl-10 pr-10 pb-5 pt-5 sm:w-11/12 w-11/12 h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <section className="nav-indicator">
        <p className="nav-indicator-text">MY WORK</p>
      </section>
      <motion.div
        className="grid h-auto min-h-full grid-cols-4 lg:grid-rows-3 md:grid-rows-4 sm:grid-rows-8 gap-3 mt-10"
        // initial={{ x: 100, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // transition={{ ease: "easeOut", duration: 1 }}
      >
        <motion.div
          className="col-span-4 lg:col-span-2 md:col-span-4 sm:col-span-4 row-span-1 rounded-3xl bg-zinc-800 work-tab work-1 hover:cursor-pointer sm:min-w-52 lg:min-w-28 md:min-h-64 min-h-64 min-w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5, delay: 0.9 }}
        ></motion.div>
        <motion.div
          className="col-span-4 lg:col-span-1 md:col-span-4 sm:col-span-4 row-span-1 rounded-3xl bg-zinc-800 work-tab work- hover:cursor-pointer sm:min-w-52 lg:min-w-28 md:min-h-64 min-h-64 min-w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5, delay: 0.8 }}
        ></motion.div>
        <motion.div
          className="col-span-4 lg:col-span-1 md:col-span-4 sm:col-span-4 row-span-1 rounded-3xl bg-zinc-800 work-tab work- hover:cursor-pointer sm:min-w-52 lg:min-w-28 md:min-h-64 min-h-64 min-w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
        ></motion.div>
        <motion.div
          className="col-span-4 lg:col-span-3 md:col-span-4 sm:col-span-4 row-span-1 rounded-3xl bg-zinc-800 work-tab work- hover:cursor-pointer sm:min-w-52 lg:min-w-28 md:min-h-64 min-h-64 min-w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
        ></motion.div>
        <motion.div
          className="col-span-4 lg:col-span-1 md:col-span-4 sm:col-span-4 row-span-1 rounded-3xl bg-zinc-800 work-tab work- hover:cursor-pointer sm:min-w-52 lg:min-w-28 md:min-h-64 min-h-64 min-w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.6 }}
        ></motion.div>
        <motion.div
          className="col-span-4 lg:col-span-1 md:col-span-4 sm:col-span-4 row-span-1 rounded-3xl bg-zinc-800 work-tab work- hover:cursor-pointer sm:min-w-52 lg:min-w-28 md:min-h-64 min-h-64 min-w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1.1 }}
        ></motion.div>
        <motion.div
          className="col-span-4 lg:col-span-1 md:col-span-4 sm:col-span-4 row-span-1 rounded-3xl bg-zinc-800 work-tab work- hover:cursor-pointer sm:min-w-52 lg:min-w-28 md:min-h-64 min-h-64 min-w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        ></motion.div>
        <motion.div
          className="col-span-4 lg:col-span-2 md:col-span-4 sm:col-span-4 row-span-1 rounded-3xl bg-zinc-800 work-tab work- hover:cursor-pointer sm:min-w-52 lg:min-w-28 md:min-h-64 min-h-64 min-w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Work;
