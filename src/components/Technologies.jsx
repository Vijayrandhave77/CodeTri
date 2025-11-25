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
      {/* Same corporate gradient background (as services) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#EAF3FA] to-white"></div>

      <div className="relative container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#093A66] mb-16">
          Our Tech Stack
        </h2>

        {/* Grid in same style as services */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-[0_3px_12px_rgba(0,0,0,0.08)] 
                         hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300 
                         border border-gray-100 flex flex-col items-center"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 text-[#0A67B1]">
                <tech.Icon />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-[#093A66] tracking-wide text-center">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
