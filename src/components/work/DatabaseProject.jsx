import React from "react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import sql from "../../assets/projectPics/sqlDatabase.png";
import guest from "../../assets/projectPics/guestbook.jpg";
import { div } from "motion/react-client";

const DatabaseProject = () => {
  return (
    <>
      <div className=" py-10 px-3 text-gray-600 font-text">
        <p className="py-7 font-medium text-lg px-3">
          Dette er mitt backend SQL-prosjekt hvor jeg opprettet og administrerte
          en SQL-database ved hjelp av Entity Framework og ASP.NET Core Web API
          Swagger UI.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.6,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" py-10 px-3 text-gray-600 font-text"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl px-3 py-2  ">
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
          <div className="rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src={guest}
              alt="Project Image"
              className="w-full h-58 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                Asp.Net core web api <span> </span>
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Feedback API - Digital Guestbook.
              </p>
              <div className="flex flex-wrap gap-5">
                <a
                  href="https://github.com/MaaRadha/GuestBookDB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-500 hover:text-blue-700"
                >
                  Les mer →
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default DatabaseProject;
