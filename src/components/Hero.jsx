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

      {/* Corporate Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-20 w-60 h-60 bg-[#0A4B78]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#0A4B78]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-10"
        >
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.2] text-[#093A66] drop-shadow-sm">
            Build Modern & Scalable
            <span className="block text-[#0A4B78] mt-2">
              Digital Products with Confidence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#093A66]/80 max-w-2xl mx-auto leading-relaxed">
            We create high-performance websites, mobile apps, and custom digital
            solutions that help your business grow faster and smarter.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative inline-flex items-center justify-center px-9 py-4 rounded-full 
                         bg-[#093A66] text-white font-semibold shadow-md hover:bg-[#0A4B78] 
                         transition-all duration-300 hover:shadow-xl"
            >
              Start Your Project
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
                <span
                  className="absolute -right-10 top-1/2 -translate-y-1/2 w-20 h-20 
                                 bg-[#093A66]/10 rounded-full blur-2xl"
                ></span>
              )}
            </a>

            {/* Secondary CTA */}
            <a
              href="#services"
              className="px-9 py-4 rounded-full font-semibold border border-[#093A66] 
                         text-[#093A66] hover:bg-[#093A66] hover:text-white 
                         transition-all duration-300"
            >
              View Services
            </a>
          </motion.div>

          {/* Social Proof */}
          <p className="mt-10 text-sm tracking-wide text-[#093A66]/70">
            Trusted by businesses for high-quality development & design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
