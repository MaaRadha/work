import React from "react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import sql from "../../assets/projectPics/sqlDatabase.png";
import { div } from "motion/react-client";

const DatabaseProject = () => {
  return (
    <>
      <div>
        <p></p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="max-w-lg  py-10 px-3 text-gray-600 font-text"
      >
        <div className="rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src={sql}
            alt="Project Image"
            className="w-full h-58 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">EntityDatabase</h3>
            <p className="text-sm text-gray-600 mb-4">
              A SQL database project for managing bands.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="https://github.com/RohitAmdahl/EntityDatabase"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:text-blue-700"
              >
                Les mer →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DatabaseProject;
