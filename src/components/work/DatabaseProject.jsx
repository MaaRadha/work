import React from "react";
import { motion } from "motion/react";
import sql from "../../assets/projectPics/sqlDatabase.png";
const DatabaseProject = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 1.6,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="max-w-2xl  py-10 px-3 text-gray-600 font-text"
    >
      <div className="rounded-lg overflow-hidden px-3 py-7 shadow-lg">
        <img
          src={sql}
          alt="Project Image"
          className="w-full h-92 transition-transform transform hover:scale-105 p-4 rounded-2xl object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">EntityDatabase</h3>
          <p className="text-gray-600 text-sm">Sql database bands</p>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://github.com/RohitAmdahl/EntityDatabase"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-500 hover:text-blue-700"
            >
              Les mer →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DatabaseProject;
