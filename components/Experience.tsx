import React, { useState } from "react";

import { workExperience, workExperiences } from "@/data";
import { IconCloudDemo } from "./magicui/IconCloudDemo";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
        <div className="col-span-1 rounded-lg from-gray-950 border border-black-300 flex items-center justify-center">
          <IconCloudDemo />
        </div>

        <div className="col-span-2 rounded-lg #000319 border border-black-300">
          <div className="sm:py-5 py-2.5 sm:px-5 px-2.5">
            {workExperiences.map((item, index) => (
              <div
                key={index}
                onClick={() => setAnimationName(item.animation.toLowerCase())}
                onPointerOver={() =>
                  setAnimationName(item.animation.toLowerCase())
                }
                onPointerOut={() => setAnimationName("idle")}
                className="grid grid-cols-[auto_1fr] items-start gap-15 transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg sm:px-5 lg:gap-5  group "
              >
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="rounded-3xl w-16 h-16 p-2 bg-black-600">
                    <img className="w-full h-full" src={item.icon} alt="" />
                  </div>
                  <div className="flex-1 w-0.5 mt-4 h-full bg-black-300 group-hover:bg-black-500 group-last:hidden" />
                </div>

                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold  group-hover:text-white transition-all ease-in-out duration-500">
                    {item.name}
                  </p>
                  <p className="text-sm mb-5 text-gray-300 group-hover:text-white transition-all ease-in-out duration-500 ">
                    <span>{item.pos}</span> -- {""}
                    <span className="block sm:inline">{item.duration}</span>
                  </p>
                  {/* <p className="text-gray-400 group-hover:text-white transition-all ease-in-out duration-500">
                    {item.title}
                  </p> */}

                  {item.points && Array.isArray(item.points) && (
                    <ul className="mt-5 list-disc ml-5 space-y-2">
                      {item.points.map((point, index) => (
                        <li
                          key={`experience-point-${index}`}
                          // className="text-white-100 text-[14px] pl-1 tracking-wider"
                          className="text-gray-400 group-hover:text-white transition-all ease-in-out duration-500 text-[14px] pl-1 tracking-wider"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
