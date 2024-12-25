import { FiSend } from "react-icons/fi";
import arrow from "../../assets/arrowdown.png";
import { motion } from "motion/react";
import HomeSection2 from "./HomeSection2";
import { RiLinkedinFill } from "react-icons/ri";
const Home = () => {
  return (
    <>
      <section>
        <div className="text-gray-600 ">
          <div className=" max-w-7xl p-3  ">
            <div className="flex items-end gap-2 px-3">
              <h1 className="text-3xl py-7 font-bold">Rohit Kumar Amdahl</h1>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <img className="w-full max-w-[400px]" src={arrow} alt="" />
              </motion.span>
            </div>
            <span></span>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className=" text-3xl md:text-7xl lg:text-8xl w-full"
            >
              <ul className="p-3">
                <li>Kreativ Designer og Webutvikler</li>
                <li>Backend-utvikler med .NET</li>
              </ul>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="py-7 font-text font-medium text-lg px-3"
            >
              Jeg er en kreativ designer og frontend-utvikler med erfaring innen
              frontend-teknologier. I tillegg har jeg gjennomført et
              backend-kurs med spesialisering i .NET, noe som har styrket mine
              ferdigheter innen fullstack-utvikling.
            </motion.p>
          </div>
        </div>
        <div className=" sm:block md:flex  lg:flex items-center lg:justify-center ">
          <div className=" py-7 px-3 w-full max-w-[260px] flex items-center ">
            <a
              href="mailto:rohit_designer@outlook.com"
              className="px-4 py-2 rounded-full flex items-center gap-2  text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500 hover:ring hover:ring-violet-500 text-center"
            >
              <FiSend size={20} color="blue" />
              <span className="font-text font-bold text-lg text-center">
                Send meg en mail
              </span>
            </a>
          </div>
          <div className=" py-7 px-3 w-full flex items-center ">
            <a
              href="https://www.linkedin.com/in/rohit-kumar-amdahl-308047140/"
              className="px-4 py-2 rounded-full flex items-center gap-2  text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500 hover:ring hover:ring-violet-500 text-center"
            >
              <RiLinkedinFill size={20} color="blue" />
              <span className="font-text font-bold text-lg text-center">
                Besøk LinkedIn-profilen min
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="">
        <HomeSection2 />
      </section>
    </>
  );
};

export default Home;
