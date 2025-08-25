import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, 
  XMarkIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-3 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
                SmileCare
              </span>
              <span className="hidden sm:inline text-xs font-medium bg-teal-600 text-white px-2 py-1 rounded-full">
                DENTAL
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-500'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a 
                href="tel:+1234567890" 
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors duration-200"
              >
                <PhoneIcon className="h-4 w-4 mr-1" />
                (123) 456-7890
              </a>
              <Link
                to="/contact"
                className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-teal-500 hover:to-teal-400 transform hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-teal-600 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl animate-fadeIn">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-3 rounded-lg text-base font-medium ${location.pathname === link.path ? 'bg-teal-50 text-teal-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 space-y-2">
              <a 
                href="tel:+1234567890" 
                className="flex items-center px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                <PhoneIcon className="h-5 w-5 mr-2 text-teal-600" />
                Call Us: (123) 456-7890
              </a>
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-teal-600 to-teal-500 text-white px-3 py-3 rounded-lg text-base font-medium shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;