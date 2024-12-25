import { FiSend } from "react-icons/fi";
const Home = () => {
  return (
    <>
      <div className="text-gray-700 ">
        <div className=" max-w-7xl p-3 backdrop-blur-md bg-transparent ">
          <h1 className="text-3xl py-7 font-bold">Rohit Kumar Amdahl</h1>
          <span></span>
          <div className="text-8xl w-full text-center">
            <ul className="p-3">
              <li>Kreativ Designer og Webutvikler</li>
              <li>Backend-utvikler med .NET</li>
            </ul>
          </div>
          <p className="max-w-3xl container mx-auto py-7 font-text font-medium text-base ">
            Jeg er en kreativ designer og webutvikler med erfaring innen
            frontend og backend. Med en bachelor i design og kompetanse i .NET,
            skaper jeg funksjonelle og estetiske digitale løsninger.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center py-6">
        <a
          href="mailto:rohit_designer@outlook.com"
          className="px-4 py-2 rounded-full flex items-center gap-2  text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500 hover:ring hover:ring-violet-500"
        >
          <FiSend />
          <span className="font-text">Send meg en melding</span>
        </a>
      </div>
    </>
  );
};

export default Home;
