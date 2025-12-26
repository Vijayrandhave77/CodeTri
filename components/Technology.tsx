import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiJavascript,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";

const techs = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },

  { name: "Express", icon: <SiExpress /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "JavaScript", icon: <SiJavascript /> },

  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Firebase", icon: <SiFirebase /> },

  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Figma", icon: <FaFigma /> },
];

export default function Technology() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#020024] via-[#0b2a6f] to-[#143a8a]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-semibold text-white">
          Technologies We Use
        </h2>

        <p className="mt-3 text-sm text-blue-200">
          We leverage cutting-edge technologies to build powerful and scalable applications.
        </p>

        {/* GRID WRAPPER */}
        <div className="relative mt-20 border-t border-b border-white/15">

          {/* VERTICAL GRID LINES (ONLY 2) */}
          <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
            <div className="border-r border-white/15"></div>
            <div className="border-r border-white/15"></div>
            <div></div>
          </div>

          {/* CONTENT */}
          <div className="relative grid grid-cols-3">
            {techs.map((tech, i) => {
              const isLastRow = i >= techs.length - 3;

              return (
                <div
                  key={i}
                  className={`h-[140px] flex flex-col items-center justify-center
                    ${!isLastRow ? "border-b border-white/15" : ""}
                  `}
                >
                  <div className="text-[36px] text-white/80 mb-3">
                    {tech.icon}
                  </div>
                  <span className="text-white text-sm font-medium tracking-wide">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
