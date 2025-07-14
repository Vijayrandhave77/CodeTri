import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '../utils/animations';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  const values = [
    { 
      title: "Clean Code", 
      description: "Maintaining high standards of code quality and organization",
      icon: "fas fa-code"
    },
    { 
      title: "Innovation", 
      description: "Staying ahead with the latest technologies and practices",
      icon: "fas fa-rocket"
    },
    { 
      title: "Scalability", 
      description: "Building solutions that grow with your business",
      icon: "fas fa-chart-line"
    },
    { 
      title: "Reliability", 
      description: "Ensuring robust and dependable systems",
      icon: "fas fa-shield-alt"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
        >
          About Us
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="space-y-6"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <motion.img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
                alt="Team"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">Our Team</h3>
                <p className="text-gray-300">Expert professionals dedicated to excellence</p>
              </div>
            </div>
          </div>
          
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <i className={`${value.icon} text-2xl text-blue-600`} />
                  <h4 className="text-lg font-semibold">{value.title}</h4>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
