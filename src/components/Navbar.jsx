import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-r from-blue-600/90 to-blue-800/90 shadow-lg' : 'bg-gradient-to-r from-blue-600/50 to-blue-800/50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent"
            >
              KodeTri
            </motion.span>
          </Link>
          
          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex space-x-8"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="group relative"
              >
                <span
                  className="block px-2 py-1 text-white hover:text-blue-300 transition-colors"
                >
                  {item.name}
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full transition-all duration-300"
                />
              </Link>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 shadow-lg rounded-b-lg"
        >
          <div className="px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 text-white hover:bg-blue-700/50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <motion.span
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-300 to-blue-400"
                  />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
