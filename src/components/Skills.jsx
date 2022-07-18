import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-300 bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">{'//'} These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={HTML} alt="HTML ICON" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={CSS} alt="CSS ICON" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JAVASCRIPT ICON"
            />
            <p>JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={ReactImg} alt="REACT ICON" />
            <p>REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={GitHub} alt="GITHUB ICON" />
            <p>GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Tailwind} alt="TAILWIND ICON" />
            <p>TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
