import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const { ref } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#E9F3FA] to-white"></div>

      {/* Soft Corporate Glow Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#0A4B78]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#0A4B78]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#093A66]">
            Empowering Your
            <span className="block text-[#0A4B78]">Digital Transformation</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#093A66]/80 max-w-2xl mx-auto">
            Smart, scalable, and modern digital solutions to accelerate your
            business growth.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <a
              href="#contact"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold 
                         bg-[#093A66] text-white shadow-md hover:bg-[#0A4B78] transition-all 
                         duration-300 hover:shadow-lg"
            >
              Get Started
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              {hovered && (
                <span className="absolute -right-10 top-1/2 -translate-y-1/2 w-24 h-24 bg-[#093A66]/10 rounded-full blur-2xl"></span>
              )}
            </a>
          </motion.div>

          {/* Hash Tags */}
          <div className="flex flex-wrap gap-4 justify-center mt-12 text-[#093A66]">
            <span className="text-sm font-medium opacity-70">
              #CorporateTech
            </span>
            <span className="text-sm font-medium opacity-70">
              #DigitalSolutions
            </span>
            <span className="text-sm font-medium opacity-70">#KodeTri</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
