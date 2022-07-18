import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl font-bold">
              Hi, I'm Deepak, nice to meet you. Please take a look around
            </p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
              quisquam exercitationem deleniti ducimus quibusdam quaerat officia
              asperiores quo impedit sapiente suscipit inventore sit itaque
              reprehenderit cumque repellat eos nesciunt laboriosam illo
              deserunt incidunt est doloribus ipsa velit? Maiores, laborum odit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
