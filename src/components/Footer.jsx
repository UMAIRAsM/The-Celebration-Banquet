import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">The Celebration</h3>
            <p className="text-gray-400 mb-4">
              Your dream venue for every occasion. We create unforgettable moments for your special days.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61576586204204" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/thecelebrationbanquet/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 text-accent" size={20} />
                <span className="text-gray-400">PIA ECH Society Block 9 Gulistan-e-Johar, Karachi</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-accent" size={20} />
                <span className="text-gray-400">03203075759, 03172476341</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-accent" size={20} />
                <span className="text-gray-400">thecelebrationbanquet@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors duration-300">Events</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors duration-300">Gallery</Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-400 hover:text-white transition-colors duration-300">Book Now</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Celebration. All rights reserved.</p>
          <p>Developed by: Muhammad Umair Aslam<a href="https://www.linkedin.com/in/umairraslamm/">(Linkedin)</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export { Footer }