import React from "react";
import { motion } from "motion/react";
import arrow from "../../assets/icons/arrow.png";
const HomeSecion = () => {
  return (
    <>
      <div className="text-gray-600 grid lg:grid-cols-2 gap-2 ">
        <div className="text-gray-600 py-5 md:py-7 lg:py-10">
          <div className="flex items-end gap-2 px-3 py-4">
            <h2 className="text-3xl py-7 font-bold text-zinc-800">utdanning</h2>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <img
                className="w-full max-w-[400px]"
                src={arrow}
                alt="arrow points down"
              />
            </motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="font-text"
          >
            <ul className="px-4">
              <li className="py-2 text-gray-600">
                Aug. 2024 - Nov 2024
                <span className="px-2 font-bold text-xl">
                  Backend-utvikling med .NET
                </span>
              </li>
              <li className="py-2 text-gray-600">
                Oct. 2021 - Oct 2023
                <span className="px-3 font-bold text-xl">
                  Frontend-utvikling
                </span>
              </li>
              <li className="py-2 text-gray-600">
                Juli. 2009 - Aug 2013
                <span className="px-3 font-bold text-xl">
                  Bachelor in Accessories design, Produktdesign{" "}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* -----experience */}
        <div className="text-gray-600 py-5 md:py-7 lg:py-10">
          <div className="flex items-end gap-2 px-3 py-4">
            <h2 className="text-3xl py-7 font-bold text-zinc-800">
              arbeidserfaring{" "}
            </h2>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <img
                className="w-full max-w-[400px]"
                src={arrow}
                alt="arrow points down"
              />
            </motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="font-text"
          >
            <ul className="px-4">
              <li className="py-2 text-gray-600">
                Mai. 2024 - Aug 2024
                <span className="px-3 font-bold text-xl">
                  Designer | Frontend utvikler, Clean Sea Solutions AS
                </span>
              </li>
              <li className="py-2 text-gray-600">
                Nov. 2023 - Dec 2023
                <span className="px-3 font-bold text-xl">
                  Frontend developer, Hundred Solutions AS
                </span>
              </li>
              <li className="py-2 text-gray-600">
                Feb. 2021 - July 2021
                <span className="px-3 font-bold text-xl text-center">
                  BIM technician, Enerhaugen Arkitektkontor AS
                </span>
              </li>
              <li className="py-2 text-gray-600">
                Okt. 2018 - Sep 2020
                <span className="px-3 font-bold text-xl">
                  Teknisk tegner, Spinn Arkitekt AS
                </span>
              </li>
              <li className="py-2 text-gray-600">
                Mai. 2018 - Aug 2018
                <span className="px-3 font-bold text-xl">
                  3D-artist / 3D-Designer, Scenario Interior Arkitekt AS
                </span>
              </li>
              <li className="py-2 text-gray-600">
                Sep. 2017 - Feb 2018
                <span className="px-3 font-bold text-xl">
                  Technical draftsman, Hille Melbye Arkitekter AS
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomeSecion;
