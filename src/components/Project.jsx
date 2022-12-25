import React from "react";
import ExerciseTracker from "../assets/portfolio/ExerciseTracker.jpg";
import Jamming from "../assets/portfolio/Jamming.jpg";
import drone from "../assets/portfolio/drone.jpg";


  const Project = () => {

    const portfolios = [
      {
        id: 1,
        src: ExerciseTracker,
        hrefDemo: "https://exercisetracker-up-n-down.vercel.app/landing",
        hrefCode: "https://github.com/jitkwan/Project_Final"
      },
      {
        id: 2,
        src: drone,
        hrefCode: "https://github.com/jitkwan/Quadplane_Design_Program"
      },
      {
        id: 3,
        src: Jamming,
        hrefDemo: "https://jamming-2io.pages.dev/",
        hrefCode: "https://github.com/jitkwan/Jamming-test",
      },
    ];
  return (
    <div
      name="My Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,hrefCode,hrefDemo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a 
                href={hrefDemo} 
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a 
                href={hrefCode}
                target="_blank"
                rel="noreferrer" 
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
