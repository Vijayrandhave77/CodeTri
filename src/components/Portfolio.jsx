import { motion } from "framer-motion";

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
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#EAF3FA] to-white"></div>

      <div className="relative container mx-auto px-6 md:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-[#093A66] mb-24"
        >
          Our Portfolio
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-[#0A67B1] to-[#0D86FF] text-white rounded-full text-xs tracking-wide shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
