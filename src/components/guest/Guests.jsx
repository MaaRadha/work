import React, { useState } from "react";

const Guests = () => {
  const [text, setText] = useState(""); // For Name
  const [Guest, setGuest] = useState(""); // For Message

  return (
    <div className="container mx-auto max-w-5xl flex flex-col justify-center items-center px-4 py-8">
      <h1 className=" text-gray-600 text-3xl md:text-7xl font-normal lg:text-7xl w-full px-3">
       Har dere noen forslag til forbedringer i porteføljen min?
      </h1>
     
      <p className="text-gray-600 text-2xl underline  decoration-pink-700 font-serif py-8">Kommer snart. Tilbakemeldingsskjema.</p>
      
    </div>
  );
};

export default Guests;
