import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../utils/animations';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      tech: ["React", "Node.js", "MongoDB"],
      description: "Full-featured e-commerce website with user authentication and payment integration",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
    },
    {
      title: "Mobile Banking App",
      tech: ["React Native", "Firebase", "AWS"],
      description: "Secure mobile banking application with real-time transaction tracking",
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800"
    },
    {
      title: "Social Media Dashboard",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      description: "Modern analytics dashboard for social media performance tracking",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Our Portfolio
        </motion.h2>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={fadeIn}
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-white">{project.description}</p>
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
