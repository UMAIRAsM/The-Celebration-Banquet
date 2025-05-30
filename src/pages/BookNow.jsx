import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, MessageSquare } from 'lucide-react';
import emailjs from 'emailjs-com';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: null,
    guestCount: '',
    eventType: '',
    acOption: 'with-ac',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, eventDate: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      eventDate: formData.eventDate ? formData.eventDate.toLocaleDateString() : '',
      guestCount: formData.guestCount,
      eventType: formData.eventType,
      acOption: formData.acOption,
      message: formData.message
    };

    emailjs.send(
      'service_xpwajlw',
      'template_nquru2h',
      templateParams,
      'ebemGHNJQeertR4Qd'
    )
    .then(() => {
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: null,
        guestCount: '',
        eventType: '',
        acOption: 'with-ac',
        message: ''
      });
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      setError('There was an error submitting your booking. Please try again or contact us directly.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('/gallery/img4.JPG')` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 pt-16 md:pt-20 text-white">
        <div className="text-white py-20 md:py-28 text-center container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Book Your Event
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Fill out the form below to check availability and request a booking
          </motion.p>
        </div>

        <div className="py-16 bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center"
                >
                  <h2 className="text-2xl font-bold mb-4">Booking Request Received!</h2>
                  <p className="mb-4">Thank you for your booking request. We'll get back to you within 24 hours to confirm availability.</p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="bg-pink-800 hover:bg-pink-900 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                    <h2 className="text-2xl font-serif font-bold mb-2">Before You Book</h2>
                    <p className="text-gray-600">
                      Please note that all bookings are subject to availability. After submitting your request, our team will contact you to confirm details and discuss any specific requirements for your event.
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name *</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Your full name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="you@example.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="form-input" placeholder="Your contact number" />
                      </div>
                      <div>
                        <label htmlFor="eventDate" className="block text-sm font-medium mb-1">Event Date *</label>
                        <div className="relative">
                          <DatePicker selected={formData.eventDate} onChange={handleDateChange} dateFormat="MMMM d, yyyy" minDate={new Date()} placeholderText="Select date" className="form-input w-full" required />
                          <Calendar className="absolute right-3 top-2.5 text-gray-400" size={18} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="guestCount" className="block text-sm font-medium mb-1">Number of Guests *</label>
                        <div className="relative">
                          <input type="number" id="guestCount" name="guestCount" value={formData.guestCount} onChange={handleChange} min="10" required className="form-input" placeholder="Estimated guest count" />
                          <Users className="absolute right-3 top-2.5 text-gray-400" size={18} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="eventType" className="block text-sm font-medium mb-1">Event Type *</label>
                        <div className="relative">
                          <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} required className="form-input appearance-none">
                            <option value="" disabled>Select event type</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Corporate">Corporate Event</option>
                            <option value="Graduation">Graduation</option>
                            <option value="Other">Other</option>
                          </select>
                          <Clock className="absolute right-3 top-2.5 text-gray-400" size={18} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Venue Option *</label>
                      <div className="flex space-x-6">
                        <label className="flex items-center">
                          <input type="radio" id="with-ac" name="acOption" value="with-ac" checked={formData.acOption === 'with-ac'} onChange={handleChange} className="h-4 w-4 text-primary-600" />
                          <span className="ml-2">With Air Conditioning</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" id="without-ac" name="acOption" value="without-ac" checked={formData.acOption === 'without-ac'} onChange={handleChange} className="h-4 w-4 text-primary-600" />
                          <span className="ml-2">Without Air Conditioning</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Special Requests or Messages</label>
                      <div className="relative">
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="form-input" placeholder="Any special requirements or additional information..."></textarea>
                        <MessageSquare className="absolute right-3 top-2.5 text-gray-400" size={18} />
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" disabled={loading} className={`btn-primary px-8 py-3 text-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                        {loading ? 'Submitting...' : 'Submit Booking Request'}
                      </button>
                      <p className="mt-2 text-sm text-gray-500">* Required fields</p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="py-16 bg-gray-50 text-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-serif font-bold mb-6 text-center">Booking Policies</h2>
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Deposit & Payment</h3>
                  <p>A 30% deposit is required to secure your booking date. The remaining balance is due 14 days before your event.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cancellation Policy</h3>
                  <p>Cancellations made 30 days or more before the event date will receive a full refund of the deposit. Cancellations made less than 30 days before will forfeit the deposit.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Minimum Guest Count</h3>
                  <p>Our venue requires a minimum of 50 guests for weekend bookings and 30 guests for weekday bookings.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Timing & Duration</h3>
                  <p>Standard booking duration is 6 hours. Additional hours can be arranged for an extra fee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
