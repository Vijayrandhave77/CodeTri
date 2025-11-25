import React from "react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* FIXED HEADER GAP */}
      <div className="pt-16"></div>

      {/* PAGE HERO */}
      <div className="w-full bg-[#0B2A45] py-12 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Our Services</h1>

          <div className="flex items-center text-sm mt-4 md:mt-0">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-orange-400 font-medium">Services</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-gray-500 text-sm mb-8">Updated: 2025</p>

        <div className="space-y-16">
          {/* Section: Intro */}
          <section className="text-gray-700 leading-relaxed text-lg">
            <p>
              At <strong>KodeTri Technologies</strong>, we deliver modern, scalable, and
              high-performance digital solutions tailored to your business needs.
              Whether you're a startup or an enterprise, we build technology that
              drives growth, efficiency, and excellence.
            </p>
          </section>

          {/* SERVICES GRID */}
          <section>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">What We Offer</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* 1. Website Development */}
              <div className="bg-white p-8 shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-[#0B2A45] mb-4">
                  Website Development
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Custom business websites, landing pages, portfolio sites and advanced
                  web platforms crafted using modern technologies like MERN, Next.js and more.
                </p>
              </div>

              {/* 2. Mobile App Development */}
              <div className="bg-white p-8 shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-[#0B2A45] mb-4">
                  Mobile App Development
                </h3>
                <p className="text-gray-600">
                  High-performance Android and iOS mobile apps built using React Native
                  and scalable backend APIs for seamless user experience.
                </p>
              </div>

              {/* 3. E-commerce Solutions */}
              <div className="bg-white p-8 shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-[#0B2A45] mb-4">
                  E-commerce Development
                </h3>
                <p className="text-gray-600">
                  Fully-featured e-commerce platforms with product management, secure checkout,
                  admin dashboard, and customer features — built for scalability.
                </p>
              </div>

              {/* 4. Custom Software Development */}
              <div className="bg-white p-8 shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-[#0B2A45] mb-4">
                  Custom Software Solutions
                </h3>
                <p className="text-gray-600">
                  Tailor-made software solutions including CRMs, ERPs, management systems,
                  workflow automation, dashboards, and business tools.
                </p>
              </div>

              {/* 5. Branding & UI/UX */}
              <div className="bg-white p-8 shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-[#0B2A45] mb-4">
                  UI/UX Design & Branding
                </h3>
                <p className="text-gray-600">
                  Premium UI/UX design, brand identity creation, logo design, and complete
                  visual guidelines to make your brand stand out.
                </p>
              </div>

              {/* 6. Cloud, DevOps & Deployment */}
              <div className="bg-white p-8 shadow-lg rounded-2xl border border-gray-200 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-[#0B2A45] mb-4">
                  Deployment, Hosting & DevOps
                </h3>
                <p className="text-gray-600">
                  AWS, Vercel, Render, DigitalOcean deployment, CI/CD setup, server
                  optimization, and scalable cloud infrastructure management.
                </p>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Why Choose KodeTri Technologies?
            </h2>
            <ul className="list-disc pl-8 text-gray-700 text-lg space-y-3">
              <li>Modern and scalable technology stack</li>
              <li>Clean, maintainable and industry-standard code</li>
              <li>Professional UI/UX and modern design approach</li>
              <li>Client-focused planning and detailed documentation</li>
              <li>Fast communication and transparent project updates</li>
              <li>Dedicated post-deployment support</li>
            </ul>
          </section>

          {/* CTA SECTION */}
          <section className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200 text-center">
            <h2 className="text-3xl font-bold text-[#0B2A45] mb-4">
              Let’s Build Something Great Together
            </h2>
            <p className="text-gray-600 mb-6">
              Have an idea or project in mind? We’re ready to turn it into a powerful,
              high-performing digital solution.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition shadow-md"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
