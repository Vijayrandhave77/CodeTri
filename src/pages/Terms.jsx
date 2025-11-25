import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* ---- FIXED HEADER OVERLAP ---- */}
      <div className="pt-16"></div>

      {/* PAGE HERO / HEADER */}
      <div className="w-full bg-[#0B2A45] py-12 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Terms & Conditions
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center text-sm mt-4 md:mt-0">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-orange-400 font-medium">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-gray-500 text-sm mb-8">
          Last Updated: November 2025
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
          {/* Intro */}
          <section>
            <p>
              Welcome to <strong>KodeTri Technologies</strong> (“Company”, “we”,
              “our”). These Terms & Conditions govern your use of our website
              <strong> kodetri.tech</strong> and our services including web
              development, app development, software solutions, and IT
              consulting.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              1. Use of Our Website
            </h2>
            <p>
              You agree to use our website for lawful purposes only. You must
              not misuse, hack, modify, or attempt to extract any part of the
              source code of our website.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              2. Services Provided
            </h2>
            <p>
              We offer web development, mobile app development, backend
              development, UI/UX designing, and other digital IT solutions. Each
              project may follow separate agreements or contracts depending on
              the scope of work.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              3. Intellectual Property
            </h2>
            <p>
              All content — including text, code, graphics, branding, and images
              — is the property of KodeTri Technologies. You may not copy or
              reproduce any content without written permission.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              4. Payments & Refunds
            </h2>
            <p>
              Payments follow the terms agreed in the project contract. Refunds
              depend on project progress, work completed, and resources used.
              Once development begins, full refunds may not be available.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              5. Third-Party Links
            </h2>
            <p>
              Our website may contain external links. We are not responsible for
              the content or policies of those websites.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              We are not liable for damages, data loss, system downtime, or
              third-party issues. All services are provided on an “as-is” basis.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              7. Changes to Terms
            </h2>
            <p>
              We may update these Terms & Conditions at any time. Continued use
              of the website means you agree to the updated terms.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <p>
              For questions or concerns, email us at:{" "}
              <strong className="text-orange-500">
                kodetri.tech@gmail.com
              </strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
