import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Teeth Cleaning', path: '/services' },
    { name: 'Dental Implants', path: '/services' },
    { name: 'Cosmetic Dentistry', path: '/services' },
    { name: 'Root Canal', path: '/services' },
  ];

  const socialIcons = [
    { name: 'Facebook', icon: 'facebook', color: 'blue-400' },
    { name: 'Instagram', icon: 'instagram', color: 'pink-400' },
    { name: 'Twitter', icon: 'twitter', color: 'cyan-400' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Single Responsive Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-teal-300">About SmileCare</h3>
              <p className="text-gray-300 mb-4">
                Providing exceptional dental care in Hyderabad for over 15 years.
              </p>
          
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-teal-300">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-teal-300 transition-colors flex items-center"
                    >
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-teal-300">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-teal-300 transition-colors flex items-center"
                    >
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-teal-300">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-teal-400 mr-3 mt-1" />
                  <span className="text-gray-300">#45, Jubilee Hills, Hyderabad</span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-teal-400 mr-3" />
                  <span className="text-gray-300">+91 40 1234 5678</span>
                </li>
                <li className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 text-teal-400 mr-3" />
                  <span className="text-gray-300">info@smilecare.com</span>
                </li>
                <li className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-teal-400 mr-3" />
                  <span className="text-gray-300">Mon-Sat: 9AM - 8PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 pt-6 border-t border-gray-700/50 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.
            </p>
            <div className="mt-2 flex justify-center space-x-4 text-xs text-gray-500">
              <Link to="/privacy" className="hover:text-teal-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-teal-300">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-teal-300">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;