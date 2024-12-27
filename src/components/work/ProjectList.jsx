import { data } from "../../helper/projectsList";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import sql from "../../assets/projectPics/sqlDatabase.png";
const ProjectList = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="py-10 px-3"
      >
        <h2 className="text-gray-600 text-3xl md:text-7xl lg:text-7xl w-full px-3">
          Disse prosjektene har utfordret meg og hjulpet meg å vokse
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-text text-gray-600 py-7 px-3">
          {data.map((project) => (
            <div
              className="rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 py-7"
              key={project.id}
            >
              <img
                src={project.imgUrl}
                alt={project.title || "Project Image"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <div className="flex flex-wrap gap-5">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-500 hover:text-blue-700"
                  >
                    Les mer →
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-500 hover:text-blue-700"
                  >
                    Live demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-gray-600"
        >
          <p className="py-7  font-text font-medium text-lg px-3">
            Jeg har valgt ut tre frontend-prosjekter som jeg er spesielt stolt
            av og som viser mine ferdigheter. Flere prosjekter kan finnes på min
            GitHub-profil.
          </p>
          <div className=" py-7 px-3 w-full max-w-[260px] flex items-center ">
            <a
              href="mailto:rohit_designer@outlook.com"
              className="px-4 py-2 rounded-full flex items-center gap-2  text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500 hover:ring hover:ring-violet-500 text-center"
            >
              <FaGithub size={20} color="blue" />
              <span className="font-text font-bold text-lg text-center">
                Besøk min Github
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectList;
