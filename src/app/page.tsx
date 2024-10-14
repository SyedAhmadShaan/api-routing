import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-center">
        Welcome to My Application
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-8 text-center">
        Your go-to solution for all your needs.
      </p>
      <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Page;
