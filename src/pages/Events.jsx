import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "Weddings",
      description:
        "Your perfect day deserves the perfect venue. Our elegant banquet hall transforms into a magical setting for your wedding celebration. With customizable lighting, spacious dance floor, and exquisite catering options, we ensure your special day is exactly how you've always dreamed it would be.",
      image: "/events/img1.JPG",
      features: [
        "Customizable lighting",
        "Spacious dance floor",
        "Elegant decor",
        "Catering options",
      ],
    },
    {
      title: "Religious Events",
      description:
        "Setting standards for hosting taraveeh during ramadan and othher meelad functions with experienced management and crowd handlingg staff.",
      image: "/events/taraveeh.jpg",
      features: [
        "Intimate setting",
        "Engagement-themed decor",
        "Photography areas",
        "Customizable packages",
      ],
    },
    {
      title: "Birthday Celebrations",
      description:
        "Make your birthday truly special with a celebration at The Celebration. Whether it's a milestone birthday or an annual gathering, our venue adapts to your vision for a memorable party experience.",
      image: "/events/img3.JPG",
      features: ["Theme customization", "Entertainment options", "Cake service", "Decorations"],
    },
  ];

  return (
    <div>
      {/* Hero Section under navbar */}
      <div className="relative text-white pt-28 md:pt-36">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/events/img91.JPG)' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content on top */}
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 "
          >
            Events We Host
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto pb-28"
          >
            From intimate gatherings to grand celebrations, we create unforgettable experiences for every occasion.
          </motion.p>
        </div>
      </div>

      {/* Events List */}
      <div ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div
                    className="relative overflow-hidden rounded-lg shadow-xl"
                    style={{ height: "400px" }}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-serif font-bold mb-4 text-pink-800">{event.title}</h2>
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  <h3 className="text-xl font-medium mb-3">Features:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {event.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-serif font-bold mb-6">Ready to Plan Your Event?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Contact us today to check availability and start planning your perfect celebration.
            </p>
            <a
              href="/book"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
            >
              Book Your Event
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Events;
