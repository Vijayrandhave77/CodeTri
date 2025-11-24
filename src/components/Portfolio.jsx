import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "Full-featured e-commerce website with user authentication and payment integration.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    },
    {
      title: "Mobile Banking App",
      tech: ["React Native", "Firebase", "AWS"],
      description:
        "Secure mobile banking application with encrypted services and real-time tracking.",
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800",
    },
    {
      title: "Social Media Dashboard",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      description:
        "Analytics dashboard with real-time metrics & deep insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Corporate Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#EAF3FA] to-white"></div>

      <div className="relative container mx-auto px-4">
        {/* Title */}
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-center text-[#093A66] mb-16"
        >
          Our Portfolio
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={fadeIn}
              key={index}
              className="group relative rounded-3xl overflow-hidden 
                 shadow-[0_4px_16px_rgba(0,0,0,0.08)] 
                 hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] 
                 transition-all duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 
                          opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#0A67B1] text-white rounded-full text-xs tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-200 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
