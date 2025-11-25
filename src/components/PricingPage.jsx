import React from "react";
import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* FIXED HEADER GAP */}
      <div className="pt-16"></div>

      {/* PAGE HERO */}
      <div className="w-full bg-[#0B2A45] py-12 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Pricing Plans
          </h1>

          <div className="flex items-center text-sm mt-4 md:mt-0">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-orange-400 font-medium">Pricing</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-lg text-gray-600 mb-12">
          Choose the perfect plan for your business needs
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Basic */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 p-10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
            <p className="text-5xl font-extrabold text-blue-700 mb-6">
              ₹1999 <span className="text-lg text-gray-600">/mo</span>
            </p>

            <ul className="text-gray-700 space-y-3 mb-8 text-left">
              <li>✔ 5 Websites</li>
              <li>✔ Basic Mobile App Support</li>
              <li>✔ Basic SEO Optimization</li>
              <li>✔ 1 Developer</li>
              <li>✔ Support via Email</li>
            </ul>

            <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Select Plan
            </button>
          </div>

          {/* Professional - Most Popular */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 p-10 transition-all duration-300 relative">
            <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-lg font-semibold">
              Most Popular
            </span>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional
            </h3>
            <p className="text-5xl font-extrabold text-blue-700 mb-6">
              ₹3999 <span className="text-lg text-gray-600">/mo</span>
            </p>

            <ul className="text-gray-800 space-y-3 mb-8 text-left">
              <li>✔ 20 Websites</li>
              <li>✔ Full Mobile App Development</li>
              <li>✔ Advanced SEO + Analytics</li>
              <li>✔ 3 Developers</li>
              <li>✔ Custom UI/UX Design</li>
              <li>✔ Priority Support</li>
            </ul>

            <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Select Plan
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 p-10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Enterprise
            </h3>
            <p className="text-5xl font-extrabold text-blue-700 mb-6">
              ₹7999 <span className="text-lg text-gray-600">/mo</span>
            </p>

            <ul className="text-gray-700 space-y-3 mb-8 text-left">
              <li>✔ Unlimited Websites</li>
              <li>✔ 24/7 Dedicated Support Team</li>
              <li>✔ All Advanced Features</li>
              <li>✔ Unlimited Developers</li>
              <li>✔ Dedicated Project Manager</li>
              <li>✔ Enterprise API Access</li>
              <li>✔ Custom Software Integration</li>
            </ul>

            <button className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
