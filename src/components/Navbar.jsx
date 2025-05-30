import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-50 shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <span
            className={`text-2xl md:text-3xl font-bold ${
              isScrolled ? 'text-pink-900' : 'text-white'
            } transition-colors duration-300 font-serif`}
          >
            THE CELEBRATION
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {[
            { name: 'Home', path: '/' },
            { name: 'Events', path: '/events' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Book Now', path: '/book' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium ${
                isScrolled ? 'text-dark hover:text-pink-900' : 'text-white hover:text-pink-900'
              } transition-colors duration-300`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-dark' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-dark' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Events', path: '/events' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Book Now', path: '/book' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-dark hover:text-accent font-medium transition-colors duration-300 py-2"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

export { Navbar }