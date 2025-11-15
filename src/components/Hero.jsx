import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '../utils/animations';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950" ref={ref}>
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-blue-900">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
        </motion.div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0">
            <div className="absolute -top-20 -left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-30 right-30 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-30 right-40 w-36 h-36 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute top-10 left-30 w-24 h-24 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <div className="text-white max-w-3xl mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-cyan-400 hover:to-blue-400 transition-all duration-500" tabIndex="0" role="heading" aria-level="1">
              Digital Innovation
              <br />
              <span className="block text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400/80 to-cyan-400/80 hover:from-cyan-400/80 hover:to-blue-400/80 transition-all duration-500">
                Transform Your Digital Future
              </span>
              <span className="block text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300/80 to-cyan-300/80 hover:from-cyan-300/80 hover:to-blue-300/80 transition-all duration-500">
                Create. Innovate. Grow.
              </span>
            </h1>
            <p className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-cyan-200 max-w-2xl mx-auto hover:bg-gradient-to-r hover:from-cyan-200 hover:to-blue-200 transition-all duration-500">
              Advanced digital solutions for your business growth
              <span className="sr-only">Start your digital transformation journey today</span>
            </p>
          </motion.div>

          {/* Animated CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 hover:shadow-xl group"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              Explore Now
              <svg
                className="ml-2 w-5 h-5 transform transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {hovered && (
                <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
              )}
            </a>
          </motion.div>

          {/* Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8"
          >
            <div className="flex flex-wrap gap-4 justify-center mt-12 max-w-2xl mx-auto text-blue-500/80">
              <span className="text-sm bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-500">
                #DigitalSolutions
              </span>
              <span className="text-sm bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-500">
                #Innovation
              </span>
              <span className="text-sm bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-500">
                #FutureTech
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Glowing Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-30 right-30 w-50 h-50 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-30 right-40 w-40 h-40 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute top-10 left-30 w-30 h-30 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-3000"></div>
          </div>
        </motion.div>
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0">
            <div className="absolute w-1 h-full bg-gradient-to-b from-purple-500/20 to-transparent left-1/4"></div>
            <div className="absolute w-1 h-full bg-gradient-to-b from-blue-500/20 to-transparent right-1/4"></div>
            <div className="absolute h-1 w-full bg-gradient-to-r from-cyan-500/20 to-transparent top-1/3"></div>
            <div className="absolute h-1 w-full bg-gradient-to-r from-purple-500/20 to-transparent bottom-1/3"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
