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
    <section className="py-28 bg-gradient-to-r from-[#020024] via-[#0b2a6f] to-[#143a8a]">
      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-white">
          Technologies We Use
        </h2>
        <p className="mt-3 text-sm text-blue-200">
          We leverage cutting-edge technologies to build powerful and scalable applications.
        </p>

        {/* OUTER LINES */}
        <div className="mt-16 border-t border-b border-white/20">

          {/* GRID */}
          <div className="grid grid-cols-3 divide-x divide-white/20">

            {techs.map((t, i) => {
              const isLastRow = i >= techs.length - 3;

              return (
                <div
                  key={i}
                  className={`py-14 flex flex-col items-center justify-center
                    ${!isLastRow ? "border-b border-white/20" : ""}
                  `}
                >
                  <div className="text-4xl text-blue-300 mb-3">
                    {t.icon}
                  </div>
                  <p className="text-white text-sm font-medium">
                    {t.name}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
