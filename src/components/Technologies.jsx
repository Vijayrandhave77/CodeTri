import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaDatabase,
  FaFire,
  FaCloud,
  FaGithub,
} from "react-icons/fa";

const Technologies = () => {
  const techStack = [
    { name: "React", Icon: FaReact },
    { name: "Node.js", Icon: FaNodeJs },
    { name: "Tailwind CSS", Icon: FaCss3Alt },
    { name: "MongoDB", Icon: FaDatabase },
    { name: "Firebase", Icon: FaFire },
    { name: "AWS", Icon: FaCloud },
    { name: "GitHub", Icon: FaGithub },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Corporate Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#EAF3FA] to-white"></div>

      <div className="relative container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#093A66] mb-16">
          Our Tech Stack
        </h2>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="text-center p-4 group transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center">
                {/* Icon Wrapper */}
                <div
                  className="w-20 h-20 rounded-2xl bg-[#E8F3FB] flex items-center justify-center 
                            shadow-[0_3px_12px_rgba(0,0,0,0.06)]
                            group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                            group-hover:scale-105 transition-all duration-300"
                >
                  <tech.Icon className="w-9 h-9 text-[#0A67B1]" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-[#093A66] mt-4">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
