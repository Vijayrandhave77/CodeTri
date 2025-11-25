import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* ---- FIXED HEADER OVERLAP FIX ---- */}
      <div className="pt-16"></div>

      {/* Page Header / Hero */}
      <div className="w-full bg-[#0B2A45] py-12 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Privacy Policy
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center text-sm mt-4 md:mt-0">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-orange-400 font-medium">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-gray-500 text-sm mb-8">
          Last Updated: November 2025
        </p>

        {/* INTRODUCTION */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At <strong>KodeTri Technologies</strong>, your privacy is our top
            priority. This Privacy Policy explains how we collect, use, store,
            and protect your information when you interact with our website and
            services. By accessing our platform <strong>kodetri.tech</strong>,
            you agree to the practices described in this policy.
          </p>
        </section>

        {/* INFO WE COLLECT */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-8 space-y-2 text-gray-700 text-lg">
            <li>
              Personal details such as your name, email, and contact number
            </li>
            <li>Project-related information submitted through inquiry forms</li>
            <li>Technical data (IP address, browser type, device type)</li>
            <li>Usage behavior such as pages visited, session duration</li>
          </ul>
        </section>

        {/* HOW WE USE INFO */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-8 space-y-3 text-gray-700 text-lg">
            <li>To communicate and respond to your project inquiries</li>
            <li>To deliver and improve our IT and software services</li>
            <li>To maintain platform performance & security</li>
            <li>To personalize your browsing experience</li>
            <li>To share project updates and service notifications</li>
          </ul>
        </section>

        {/* COOKIES */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            4. Cookies & Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We use cookies to improve functionality, loading performance, and
            analyze traffic. You can control or disable cookies through browser
            settings.
          </p>
        </section>

        {/* SHARING */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            5. Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We never sell your information. Data is shared only with trusted
            service providers (cloud hosting, email services, analytics tools)
            for operational purposes.
          </p>
        </section>

        {/* SECURITY */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            6. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We use strong security practices, encryption, and modern protocols
            to protect your data. However, no online system is 100% secure.
          </p>
        </section>

        {/* THIRD PARTY */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            7. Third-Party Links
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our website may include external links. We are not responsible for
            their privacy practices.
          </p>
        </section>

        {/* UPDATES */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            8. Updates to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We may update this policy from time to time. Please review it
            regularly to stay informed.
          </p>
        </section>

        {/* CONTACT */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            9. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            For questions or concerns, email us at:
            <br />
            <strong className="text-orange-500">kodetri.tech@gmail.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
