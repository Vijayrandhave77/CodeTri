import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-[#F5F9FF]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-[#0B5ED7]">
            Get in Touch
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 leading-tight">
            Seamless Communication,<br /> Global Impact
          </h2>

          <p className="mt-4 text-gray-600 max-w-lg text-sm leading-relaxed">
            We’d love to hear from you. Whether you have a question about our
            services or want to start a project, our team is ready to help.
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 my-10" />

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Head Office */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E6F0FF] text-[#0B5ED7]">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase">
                  Head Office
                </h4>
                <p className="text-sm text-gray-600">
                  123 Business Street <br />
                  Tech City, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E6F0FF] text-[#0B5ED7]">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase">
                  Email Support
                </h4>
                <p className="text-sm text-gray-600">
                  support@kodeti.com <br />
                  hello@kodeti.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E6F0FF] text-[#0B5ED7]">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase">
                  Let’s Talk
                </h4>
                <p className="text-sm text-gray-600">
                  +91 98765 43210 <br />
                  +91 98765 43211
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E6F0FF] text-[#0B5ED7]">
                <FaClock />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 uppercase">
                  Working Hours
                </h4>
                <p className="text-sm text-gray-600">
                  Monday – Friday <br />
                  08:00 AM – 06:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 my-10" />

          {/* Social Icons */}
          <div>
            <p className="font-semibold text-gray-900 mb-4">
              Follow our social media
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-[#0B5ED7] hover:bg-[#0B5ED7] hover:text-white transition cursor-pointer"
                  >
                    <Icon size={14} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Send us a message
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input type="text" placeholder="Name" className="input-field" />
            <input type="text" placeholder="Company" className="input-field" />
            <input type="text" placeholder="Phone" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <input
              type="text"
              placeholder="Subject"
              className="md:col-span-2 input-field"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="md:col-span-2 input-field resize-none"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 mt-2 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#0B5ED7] to-[#22D3EE] hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[420px] grayscale">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=London&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* Input Styles */}
      <style>
        {`
          .input-field {
            width: 100%;
            padding: 12px 14px;
            border-radius: 10px;
            border: 1px solid #dbeafe;
            outline: none;
            font-size: 14px;
          }
          .input-field:focus {
            border-color: #0B5ED7;
            box-shadow: 0 0 0 2px rgba(11,94,215,0.15);
          }
        `}
      </style>
    </section>
  );
};

export default ContactUs;
