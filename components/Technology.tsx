import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiNextdotjs, SiFigma } from "react-icons/si";

const techStack = [
  { icon: <FaReact />, class: "top-0 left-1/2 -translate-x-1/2" },
  { icon: <SiJavascript />, class: "top-16 right-16" },
  { icon: <SiFigma />, class: "top-1/2 right-0 -translate-y-1/2" },
  { icon: <FaAws />, class: "bottom-16 right-20" },
  { icon: <FaGitAlt />, class: "bottom-0 right-1/2 translate-x-1/2" },
  { icon: <FaDocker />, class: "bottom-16 left-20" },
  { icon: <SiNextdotjs />, class: "top-1/2 left-0 -translate-y-1/2" },
  { icon: <SiExpress />, class: "top-16 left-16" },
  { icon: <SiMongodb />, class: "bottom-10 left-1/2 -translate-x-1/2" },
  { icon: <FaNodeJs />, class: "top-1/3 left-1/4" },
];

const Technology = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      
      {/* Section Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-slate-800">
          Technologies We Use
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          We utilize cutting-edge technologies to build powerful and scalable applications.
        </p>
      </div>

      {/* Orbit Container */}
      <div className="relative mx-auto w-[420px] h-[420px]">

        {/* Center Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-60 h-60 rounded-full bg-white flex flex-col items-center justify-center text-center border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800">
              Technologies <br /> We Use
            </h3>
            <p className="mt-3 text-sm text-slate-600 px-6">
              We utilize cutting-edge technologies to build powerful and scalable applications.
            </p>
          </div>
        </div>

        {/* Tech Icons */}
        {techStack.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.class} w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl text-blue-600 border border-slate-200`}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
