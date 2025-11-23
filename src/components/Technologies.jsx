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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {techStack.map((tech, index) => (
            <div key={index} className="text-center p-4">
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <tech.Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-base font-medium text-gray-900">
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
