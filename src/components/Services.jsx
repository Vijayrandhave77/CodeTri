import React, { useEffect } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
  FaLink,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
    });
  }, []);

  const services = [
    {
      title: "Fullstack Web Development",
      description:
        "Complete, scalable and secure web solutions – frontend to backend.",
      icon: FaLaptopCode,
    },
    {
      title: "Mobile App Development",
      description: "High-performance native and cross-platform mobile apps.",
      icon: FaMobileAlt,
    },
    {
      title: "UI/UX Design",
      description:
        "Premium UI/UX with modern, clean and intuitive experiences.",
      icon: FaPaintBrush,
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud deployment, automation & reliable DevOps pipelines.",
      icon: FaCloud,
    },
    {
      title: "API Integrations",
      description: "Secure and seamless integration with third-party systems.",
      icon: FaLink,
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Corporate Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#EAF3FA] to-white"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-center text-[#093A66] mb-16"
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div
          data-aos="fade-up"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white p-8 rounded-2xl shadow-[0_3px_12px_rgba(0,0,0,0.08)] 
                     hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300 
                     border border-gray-100"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 text-[#0A67B1]">
                <service.icon />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#093A66] mb-3 tracking-wide">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#093A66]/75 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
