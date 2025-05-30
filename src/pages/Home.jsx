import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [eventsRef, eventsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const galleryImages = ['img1.JPG', 'img2.JPG', 'img3.JPG', 'img4.JPG', 'img5.JPG', 'img6.JPG', 'img7.JPG', 'img8.JPG'];

  return (
    <div>
      {/* Hero Video Section */}
      <div className="video-container relative">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/video/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
              THE CELEBRATION BANQUET
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Creating unforgettable memories for your special moments
            </p>
            <Link 
              to="/book" 
              className="bg-pink-900 border-black hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Book Your Event
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Heading */}
      <div ref={headingRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-serif font-bold text-dark mb-6"
          >
            Your Dream Venue for Every Occasion
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            At The Celebration, we transform your vision into reality. Our stunning venue provides the perfect backdrop for weddings, corporate events, birthdays, and more.
          </motion.p>
        </div>
      </div>

      {/* Events Section */}
      <div ref={eventsRef} className="py-16 bg-primary-600">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-serif font-bold italic text-center mb-12 text-white"
          >
            THE CELEBRATIONS <br />- We Host -
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings",
                image: "/gallery/img1.JPG",
                description: "Your perfect day deserves a perfect venue. We offer elegant spaces and customizable packages to make your wedding unforgettable.",
              },
              {
                title: "Birthday Parties",
                image: "/gallery/img2.JPG",
                description: "Celebrate another year with style. Our venue offers the perfect setting for birthdays of any age and theme.",
              },
              {
                title: "Islamic Events",
                image: "/gallery/taraveeh.jpg",
                description: "From conferences to taraveeh, our versatile spaces and professional staff will ensure your Islamic event is a success.",
              }
            ].map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="event-card bg-white rounded shadow overflow-hidden"
              >
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="event-content p-4">
                  <h3 className="text-xl font-serif font-bold mb-2">{event.title}</h3>
                  <p className="text-sm mb-4">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/events" 
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-pink-900 font-semibold py-2 px-8 rounded-full transition duration-300"
            >
              View All Events
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div ref={galleryRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-serif font-bold text-center mb-12"
          >
            Our Gallery
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((name, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="gallery-item"
              >
                <img 
                  src={`/gallery/${name}`} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-40 object-cover rounded"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/gallery" 
              className="inline-block border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-2 px-8 rounded-full transition duration-300"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-pink-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Plan Your Event?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact us today to check availability and start planning your perfect celebration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/book" 
              className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Book Now
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent hover:bg-pink-800 border-2 border-white text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
