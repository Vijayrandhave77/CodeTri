import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[#064268] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 tracking-wide">
              KodeTri Technologies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Innovation in Every Line of Code
            </p>

            <div className="mt-5 space-y-2 text-sm text-gray-700">
              <p>
                <strong>Address:</strong> Indore, Madhya Pradesh (Remote Office)
              </p>
              <p>
                <strong>Email:</strong> kodetritechnologies@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 8103292287
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-[#064268] transition duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-600 hover:text-[#064268] transition duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-[#064268] transition duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="text-gray-600 hover:text-[#064268] transition duration-200"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-gray-600 hover:text-[#064268] transition duration-200"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Policies</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/terms-conditions"
                  className="text-gray-600 hover:text-[#064268] transition duration-200"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-[#064268] transition duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="text-gray-600 hover:text-[#064268] transition duration-200"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="text-gray-600 hover:text-[#064268] transition duration-200"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-5">
              <a
                href="https://www.linkedin.com/public-profile"
                className="text-gray-600 hover:text-[#064268] transition duration-200"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/kodetritechnologies"
                className="text-gray-600 hover:text-[#064268] transition duration-200"
              >
                <FaInstagram className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} KodeTri Technologies • All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
