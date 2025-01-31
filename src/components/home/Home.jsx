import { FiSend } from "react-icons/fi";
import arrow from "../../assets/icons/arrow.png";
import { motion } from "motion/react";
import HomeSection2 from "./HomeSection";
import { RiLinkedinFill } from "react-icons/ri";
import collage from "../../assets/colmin.jpg";
import figma from "../../assets/icons/figma.png";
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  const { user } = useAuth0();
  return (
    <>
      <section>
        <div className="text-gray-600">
          <div className="max-w-7xl p-3">
            <div className="text-center font-serif text-2xl font-bold text-gray-600 p-3">
              {user && (
                <p>
                  Hei og velkommen til min portfolio -{" "}
                  <span className="text-violet-700">{user.name}</span>
                </p>
              )}
            </div>
            <div className="flex items-end gap-2 px-3">
              <h1 className="text-3xl py-7 font-bold text-zinc-800">
                Rohit Kumar Amdahl
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
              className=" text-3xl md:text-7xl lg:text-7xl w-full"
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
                duration: 1.0,
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
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=" sm:block md:flex  lg:flex items-center lg:justify-center "
        >
          <div className=" py-7 px-3 w-full max-w-[260px] flex items-center ">
            <a
              href="mailto:rohit_designer@outlook.com"
              className="px-4 py-2 rounded-full flex items-center gap-2
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500 hover:ring hover:ring-violet-500 text-center text-zinc-800"
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
              className="px-4 py-2 rounded-full flex items-center gap-2  
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500 hover:ring hover:ring-violet-500 text-center text-zinc-800"
            >
              <RiLinkedinFill size={20} color="blue" />
              <span className="font-text font-bold text-lg text-center">
                Besøk LinkedIn-profilen min
              </span>
            </a>
          </div>
        </motion.div>
        <section className="px-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="flex flex-col items-center ">
              <img
                className="p-2 md:p-6 lg:p-10"
                src={collage}
                alt=" a collage of different pictures of my work including design and development process"
              />
              <img
                className="p-2 md:p-6 lg:p-10 bg-white rounded-full"
                src={figma}
                alt="figma logo"
              />
            </div>

            <p className="py-7 font-text  text-lg px-3">
              Jeg har studert design, og det er en stor fordel for meg å bruke
              min kompetanse når jeg jobber med webdesign. Jeg er spesielt
              interessert i UX- og UI-design. Min prosess for å designe noe går
              gjennom grundig research, utvikling av stilguide og wireframes, og
              deretter videre til high-fidelity wireframes og layouter. I denne
              kollasjen viser jeg også min kompetanse i Figma. Jeg elsker å løse
              problemer med kreativitet og finne brukervennlige og estetiske
              løsninger.
            </p>
            <ul className="py-7 font-text  text-lg px-3 capitalize">
              <li>wireframes</li>
              <li>high fidelity wireframes</li>
              <li>low fidelity wireframes</li>
              <li>Style guide</li>
              <li>Theme board</li>
            </ul>
          </motion.div>
        </section>
      </section>
      <section className="px-3">
        <HomeSection2 />
      </section>
    </>
  );
};

export default Home;
