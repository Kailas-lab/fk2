import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.webp"
                alt="Future Key Logo"
                className="h-12 w-auto"
              />
              <h2 className="text-white text-sm">Future Key</h2>
            </Link>

            <p className="text-white text-sm leading-relaxed">
              Your virtual space to unlock dream career opportunities. We provide the key to open doors to your professional future through quality education and hands-on learning.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/futurekeyedu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 rounded-lg hover:bg-emerald-600 transition-colors duration-300"
              >
                {/* Replace the src with your actual LinkedIn image */}
                <img
                  src="https://placehold.co/200x200/0A66C2/FFFFFF?text=in"
                  alt="LinkedIn"
                  className="h-5 w-5 rounded-lg"
                />
              </a>
              <a
                href="https://www.instagram.com/futurekeyedu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 rounded-lg hover:bg-emerald-600 transition-colors duration-300"
              >
                {/* Replace the src with your actual Instagram image */}
                <img
                  src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-392.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Instagram"
                  className="h-5 w-5 rounded-lg"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Courses', 'Career', 'Services', 'Franchise', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              {['Python Programming', 'Data Science', 'Machine Learning', 'Web Development', 'Digital Marketing'].map((course) => (
                <li key={course}>
                  <Link
                    to="/courses"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-600 mt-0.5" />
                <span className="text-gray-300 text-sm">Remote</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-600" />
                <span className="text-gray-300 text-sm">+91 8680870950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-600" />
                <span className="text-gray-300 text-sm">futurekeyeduservices@gmail.com</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-md font-medium text-white mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-900 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-r-lg hover:from-emerald-600 hover:to-green-500 transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 Future Key. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-300 hover:text-emerald-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-300 hover:text-emerald-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-300 hover:text-emerald-400 text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;