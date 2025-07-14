import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideLeft, slideRight, staggerContainer } from '../utils/animations';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Let's Build Something Great
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <FaEnvelope className="text-blue-600 text-xl" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">contact@kodetri.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <FaPhone className="text-blue-600 text-xl" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+1 234 567 8900</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">123 Tech Street, Silicon Valley, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
