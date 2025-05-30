import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const galleryImages = [
    { id: 1, src: "/gallery/img1.JPG", alt: "Image 1", category: 'Inside' },
    { id: 2, src: "/gallery/img2.JPG", alt: "Image 2", category: 'Inside' },
    { id: 3, src: "/gallery/img3.JPG", alt: "Image 3", category: 'Inside' },
    { id: 12, src: "/gallery/entrance.JPG", alt: "Image 12", category: 'Inside' },
    { id: 4, src: "/gallery/img4.JPG", alt: "Image 4", category: 'Inside' },
    { id: 5, src: "/gallery/img5.JPG", alt: "Image 5", category: 'Inside' },
    { id: 6, src: "/gallery/img6.JPG", alt: "Image 6", category: 'Inside' },
    { id: 7, src: "/gallery/img7.JPG", alt: "Image 7", category: 'Inside' },
    { id: 8, src: "/gallery/img8.JPG", alt: "Image 8", category: 'Inside' },
    { id: 9, src: "/gallery/img9.JPG", alt: "Image 9", category: 'Inside' },
    { id: 10, src: "/gallery/img10.JPG", alt: "Image 10", category: 'Inside' },
    { id: 10, src: "/gallery/outside.JPG", alt: "Image 10", category: 'Outside' },
    { id: 11, src: "/gallery/img11.JPG", alt: "Image 11", category: 'Inside' },
    { id: 12, src: "/gallery/img12.JPG", alt: "Image 12", category: 'Inside' },
    { id: 13, src: "/gallery/taraveeh.jpg", alt: "Image 12", category: 'Functions' },
    { id: 14, src: "/gallery/taraveeh2.jpg", alt: "Image 12", category: 'Functions' },
    { id: 15, src: "/images/cover.jpg", alt: "Image 12", category: 'Outside' },
    { id: 16, src: "/images/lawnb.jpg", alt: "Image 12", category: 'Outside' },
  ];

  const [filter, setFilter] = useState('All');
  const allCategories = ['All', 'Inside', 'Outside', 'Parking', 'Bridal Room', 'Functions'];
  const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);

  const openLightbox = (image) => {
    const index = filteredImages.findIndex(img => img.id === image.id);
    setSelectedIndex(index);
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    const newIndex = (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (selectedIndex + 1) % filteredImages.length;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div>
      {/* Hero Section under navbar */}
      <div
        className="relative text-white pt-28 md:pt-36 bg-cover bg-center"
        style={{ backgroundImage: "url('/gallery/img2.JPG')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto pb-28"
          >
            Explore moments from our most memorable events and celebrations
          </motion.p>
        </div>
      </div>

      {/* Gallery Filter and Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">

          {/* Futuristic Video Section */}
          <div className="mb-16">
            <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl group">
              <video
                className="w-full h-auto rounded-2xl futuristic-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/video/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 border border-cyan-400 rounded-2xl animate-glow pointer-events-none" />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {allCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition duration-300 ${
                  filter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                style={{ height: '300px' }}
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">{image.alt}</p>
                    <span className="inline-block mt-1 text-xs text-primary-200 bg-primary-900 bg-opacity-50 px-2 py-1 rounded">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
              <div className="relative max-w-6xl w-full flex flex-col items-center">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-white rounded-full p-1 text-black z-50 hover:bg-gray-200 transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="bg-white p-2 rounded-lg shadow-2xl">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
                    <p className="text-gray-600">{selectedImage.category}</p>
                  </div>
                </div>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <button
                    onClick={goToPrevious}
                    className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full text-black shadow-md"
                  >
                    ⬅
                  </button>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <button
                    onClick={goToNext}
                    className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full text-black shadow-md"
                  >
                    ➡
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Want to Create Your Own Memories?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Book our venue for your next celebration and add your moments to our gallery.
          </p>
          <a
            href="/book"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            Book Your Event
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
export { Gallery };
