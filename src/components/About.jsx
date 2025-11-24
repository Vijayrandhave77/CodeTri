import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const values = [
    {
      title: "Clean Code",
      description:
        "Maintaining high standards of code quality and organization.",
      icon: "fas fa-code",
    },
    {
      title: "Innovation",
      description: "Staying ahead with the latest technologies and practices.",
      icon: "fas fa-rocket",
    },
    {
      title: "Scalability",
      description: "Building solutions that grow with your business.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Reliability",
      description: "Ensuring robust and dependable systems.",
      icon: "fas fa-shield-alt",
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Corporate Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#EAF3FA] to-white"></div>

      <div className="relative container mx-auto px-6">
        {/* Title */}
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-center text-[#093A66] mb-16"
        >
          About Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Image Block */}
          <div
            data-aos="fade-right"
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
              alt="Team"
              className="w-full h-72 object-cover"
            />

            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#093A66]/70 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl font-semibold">Our Team</h3>
              <p className="text-white/80">
                Expert professionals dedicated to excellence.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div data-aos="fade-up" className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="p-6 rounded-xl bg-[#F2F7FB] border border-[#093A66]/10 shadow-sm 
            hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <i className={`${value.icon} text-2xl text-[#0A4B78]`} />
                  <h4 className="text-lg font-semibold text-[#093A66]">
                    {value.title}
                  </h4>
                </div>

                <p className="text-[#093A66]/75 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
