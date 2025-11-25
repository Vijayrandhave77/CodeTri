import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* FIXED HEADER GAP */}
      <div className="pt-16"></div>

      {/* HERO SECTION */}
      <div className="w-full bg-[#0B2A45] py-12 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Portfolio</h1>

          <div className="flex items-center text-sm mt-4 md:mt-0">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-orange-400 font-medium">Portfolio</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* ABOUT COMPANY */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Work Defines Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At KodeTri Technologies, we build modern, secure and scalable digital products 
            for businesses looking to grow. Here are some of our best works across web, 
            mobile, and custom software development.
          </p>
        </div>

        {/* PROJECTS SECTION */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Featured Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">

          {/* Project 1 */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition">
            <img src="/images/project1.jpg" alt="project" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">E-Commerce Platform</h4>
              <p className="text-gray-600 mt-2">
                Multi-vendor online marketplace with payments, cart, chat, and admin dashboards.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition">
            <img src="/images/project2.jpg" alt="project" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">Hospital Management System</h4>
              <p className="text-gray-600 mt-2">
                Full backend solution with doctor, patient, reception roles and real-time features.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition">
            <img src="/images/project3.jpg" alt="project" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">Real Estate App</h4>
              <p className="text-gray-600 mt-2">
                Property listing system with filters, wishlist, chat, and location integration.
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition">
            <img src="/images/project4.jpg" alt="project" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">Learning Management System</h4>
              <p className="text-gray-600 mt-2">
                Complete LMS with courses, quizzes, video streaming, and admin controls.
              </p>
            </div>
          </div>

          {/* Project 5 */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition">
            <img src="/images/project5.jpg" alt="project" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">Food Delivery App</h4>
              <p className="text-gray-600 mt-2">
                Food ordering system with live order status, delivery partner app & payments.
              </p>
            </div>
          </div>

          {/* Project 6 */}
          <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition">
            <img src="/images/project6.jpg" alt="project" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">Social Media Platform</h4>
              <p className="text-gray-600 mt-2">
                Messaging, posting, notifications and real-time chat using Socket.io.
              </p>
            </div>
          </div>
        </div>

        {/* TECH STACK */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Technologies We Use</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            "React.js",
            "Next.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Tailwind CSS",
            "Firebase",
            "Socket.io",
            "Python",
            "AI Integrations",
            "PostgreSQL",
            "AWS & Cloud",
          ].map((tech, i) => (
            <div
              key={i}
              className="bg-white p-4 shadow-md rounded-xl text-center font-medium text-gray-700 hover:shadow-lg transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
