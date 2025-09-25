import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Career', path: '/career' },
    { name: 'Services', path: '/services' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src="/name.webp"
              alt="Future Key Logo"
              className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
            />
          </Link>



          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 px-4 text-sm font-medium transition-colors duration-300 rounded-full 
                  ${isActive(link.path)
                    ? 'bg-emerald-500 text-white'
                    : 'text-white hover:bg-emerald-500 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src="/logo.webp"
                alt="logo"
                className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <Link
              to="/courses"
              className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-full font-medium hover:from-emerald-600 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              Get Started
            </Link>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-emerald-400 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-white hover:bg-emerald-500 rounded-full py-2 px-4 text-center
                    ${isActive(link.path)
                      ? 'bg-emerald-500 text-white'
                      : 'text-white'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/courses"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-full font-medium text-center hover:from-emerald-600 hover:to-green-500 transition-all duration-300"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;