import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideLeft, slideRight } from "../utils/animations";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-4xl font-semibold text-gray-900 mb-12 text-center tracking-tight"
        >
          Get in Touch With Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Contact Info */}
          <motion.div variants={slideLeft} initial="hidden" animate="visible">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              Have a project in mind or need help with your product? Our team
              will get back to you as soon as possible.
            </p>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600 text-sm">
                    kodetritechnologies@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600 text-sm">+91 8103292287</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600 text-sm">
                    Indore, Madhya Pradesh (Remote Office)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={slideRight} initial="hidden" animate="visible">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                  focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-50"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                  focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-50"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 
                  focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-50"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium 
                shadow-md hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
