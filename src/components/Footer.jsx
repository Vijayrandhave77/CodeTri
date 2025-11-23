import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 tracking-wide">
              KodeTri Technologies
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Modern, scalable and high-performance digital solutions crafted
              with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex items-center space-x-5">
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/kodetritechnologies"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-200"
              >
                <FaInstagram className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 KodeTri Technologies • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
