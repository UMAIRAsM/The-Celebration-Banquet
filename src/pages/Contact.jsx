import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xpwajlw', // Your EmailJS Service ID
        'template_248y76d', // Your EmailJS Template ID
        formRef.current,
        'ebemGHNJQeertR4Qd' // Your EmailJS Public Key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error);
        }
      );
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/cover.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 text-center pt-[100px] px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            We’re happy to assist with any inquiries. Reach out or fill out the form below to start planning your event.
          </motion.p>
        </div>
      </div>

      {/* Map & Info Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="h-96 rounded-lg overflow-hidden shadow-md"
            >
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3385885943376!2d67.1451526!3d24.9205329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339f132e04f6d%3A0xf2dbd3aeddd7820f!2sThe%20Celebration!5e0!3m2!1sen!2s!4v1748599110023!5m2!1sen!2s"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-lg p-8 shadow-sm"
              >
                <h2 className="text-2xl font-serif font-bold mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-primary-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-gray-600">
                        PIA ECH Society Block 9, Gulistan-e-Johar, Karachi
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-primary-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:03012251106">03012251106</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-primary-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:thecelebrationbanquet@gmail.com">thecelebrationbanquet@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-primary-600 mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg">Office Hours</h3>
                      <p className="text-gray-600">Monday - Sunday: 10:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary-600 mt-1 mr-4">
                      <Facebook size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Social Media</h3>
                      <div className="flex space-x-4 mt-2">
                        <a href="https://www.facebook.com/profile.php?id=61576586204204" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-2 rounded-full">
                          <Facebook size={18} />
                        </a>
                        <a href="https://www.instagram.com/thecelebrationbanquet/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full">
                          <Instagram size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="mt-8 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <a href="/book" className="bg-pink-800 hover:bg-pink-900 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
                  Book Your Event Now
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-serif font-bold mb-8 text-center">Send Us a Message</h2>
          <form ref={formRef} onSubmit={sendEmail} className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" id="name" name="user_name" required className="form-input w-full" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" name="user_email" required className="form-input w-full" placeholder="youremail@gmail.com" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" id="subject" name="subject" required className="form-input w-full" placeholder="Event Inquiry" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" name="message" rows={4} required className="form-input w-full" placeholder="Your message here..."></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-pink-800 hover:bg-pink-900 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
export { Contact };
