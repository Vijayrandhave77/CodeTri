import React, { useEffect } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
  FaLink,
} from "react-icons/fa";
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
        "Robust, scalable and business-focused web applications with clean architecture and secure APIs.",
      icon: FaLaptopCode,
    },
    {
      title: "Mobile App Development",
      description:
        "Smooth, high-performance native & cross-platform mobile apps for iOS and Android.",
      icon: FaMobileAlt,
    },
    {
      title: "UI/UX Design",
      description:
        "Modern, intuitive and conversion-focused UI/UX design crafted for exceptional user experience.",
      icon: FaPaintBrush,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Cloud hosting, automation, CI/CD pipelines and secure DevOps deployments.",
      icon: FaCloud,
    },
    {
      title: "API Integrations",
      description:
        "Third-party integrations, custom API development and secure communication layers.",
      icon: FaLink,
    },
  ];

  return (
    <section className="relative w-full py-28 overflow-hidden bg-gradient-to-b from-white via-[#F3F8FC] to-white">
      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Title */}
        <div data-aos="fade-up" className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#093A66]">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-lg leading-relaxed">
            Premium, reliable and scalable IT solutions tailored for modern
            businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white p-8 rounded-2xl border border-[#093A66]/10 
                        shadow-[0_4px_16px_rgba(0,0,0,0.06)] 
                        hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] 
                        hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-[#0A67B1]/10 flex items-center justify-center text-[#0A67B1] text-4xl mb-6">
                <service.icon />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#093A66] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#093A66]/75 leading-relaxed text-[15px]">
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
