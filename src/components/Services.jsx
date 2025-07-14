import React, { useEffect } from 'react';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaCloud, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '../utils/animations';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const services = [
    {
      title: "Fullstack Web Development",
      description: "Complete web solutions from frontend to backend",
      icon: FaLaptopCode
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      icon: FaMobileAlt
    },
    {
      title: "UI/UX Design",
      description: "Modern and intuitive user interfaces",
      icon: FaPaintBrush
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable cloud solutions and automated deployment",
      icon: FaCloud
    },
    {
      title: "API Integrations",
      description: "Seamless integration with third-party services",
      icon: FaLink
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Our Services
        </motion.h2>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4 text-blue-600">
                <service.icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
