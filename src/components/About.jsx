import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });
  }, []);

  return (
    <section className="relative w-full py-28 overflow-hidden bg-gradient-to-b from-white via-[#F3F8FC] to-white">
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A3A5C]">
            About KodeTri Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a modern software company delivering scalable, secure and
            business-ready digital solutions tailored for long-term growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-[#0A3A5C] mb-5">
              Crafting Digital Experiences With Precision
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At KodeTri Technologies, we believe great products are built on a
              strong foundation—clean architecture, modern technologies and a
              deep understanding of business needs.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Whether it's a fast-performing web application, a feature-rich
              mobile app, or a highly scalable backend system, our team ensures
              every project is engineered with reliability and long-term
              stability in mind.
            </p>

            {/* Core Values */}
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-10 h-10 bg-[#0A4B78]/10 rounded-lg flex items-center justify-center text-[#0A4B78] text-xl">
                  <i className="fas fa-layer-group"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A3A5C]">
                    Engineering Excellence
                  </h4>
                  <p className="text-gray-600">
                    Clean, modular and future-proof development practices.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="w-10 h-10 bg-[#0A4B78]/10 rounded-lg flex items-center justify-center text-[#0A4B78] text-xl">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A3A5C]">
                    Secure & Scalable Systems
                  </h4>
                  <p className="text-gray-600">
                    Enterprise-level security with high performance.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="w-10 h-10 bg-[#0A4B78]/10 rounded-lg flex items-center justify-center text-[#0A4B78] text-xl">
                  <i className="fas fa-rocket"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0A3A5C]">
                    Innovation First
                  </h4>
                  <p className="text-gray-600">
                    Implementing modern technologies to build future-ready
                    solutions.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div data-aos="fade-left" className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1665686309255-6f900efc2a26?w=1920"
                alt="Team workspace"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white shadow-xl p-5 rounded-xl border border-gray-100 w-64"
              data-aos="fade-up"
            >
              <h4 className="text-xl font-semibold text-[#0A3A5C]">
                50+ Projects Delivered
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                Across e-commerce, SaaS, automation, healthcare, real estate &
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
