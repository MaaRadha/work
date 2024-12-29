import React from "react";
import avtar from "../assets/avatar.jpg";
const ErrorPage = () => {
  return (
    <div className=" container mx-auto max-w-5xl flex flex-col justify-center items-center px-3 ">
      <div className=" p-3">
        <h1 className="text-3xl md:text-7xl text-red-600 lg:text-8xl items-center">
          404 Page Not Found
        </h1>
      </div>
      <div>
        <img
          className="rounded-2xl ring ring-red-300 shadow-md animate-pulse"
          src={avtar}
          alt="error page image not found"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
