import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" footer bg-[#0a346b] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl text-white font-semibold mb-4 tracking-wide">
              KodeTri Technologies
            </h3>
            <p className="text-white leading-relaxed">
              Innovation in Every Line of Code
            </p>
               <div className="flex items-center mt-3 space-x-5">
              <a
                href="https://www.linkedin.com/public-profile"
                className="text-gray-600 hover:text-[#064268] rounded-full bg-white p-2 transition duration-200"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kodetritechnologies"
                className="text-gray-600 hover:text-[#064268] transition duration-200 rounded-full p-2 bg-white"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-white hover:text-[#0d6efd] transition duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-white hover:text-[#0d6efd] transition duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white hover:text-[#0d6efd] transition duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/testimonials"
                  className="text-white hover:text-[#0d6efd] transition duration-200"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-white hover:text-[#0d6efd] transition duration-200"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Policies</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/terms-conditions"
                  className="text-white hover:text-[#0d6efd] transition duration-200"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-white hover:text-[#0d6efd] transition duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/refund-policy"
                  className="text-white hover:text-[#0d6efd] transition duration-200"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="/faqs"
                  className="text-white hover:text-[#0d6efd] transition duration-200"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          
              <div className="mt-5 space-y-2 text-sm text-white">
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
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-white text-sm">
            © {new Date().getFullYear()} KodeTri Technologies • All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
