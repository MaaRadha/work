import { motion } from "motion/react";
import arrow from "../../assets/icons/arrow.png";

const Project = () => {
  return (
    <div className="text-3xl md:text-7xl lg:text-8xl w-full text-gray-600 p-3">
      <div className=" max-w-7xl ">
        <div className="flex items-end gap-2 px-3">
          <h1 className="text-3xl py-7 font-bold text-zinc-800">
            Resultater i Fokus
          </h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={arrow} alt="arrow points down" />
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Project;
