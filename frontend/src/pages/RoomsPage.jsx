import React, { useState } from 'react';
import { Calendar, Users, Check, X } from 'lucide-react';
import { rooms, faqs } from '../data/mock';
import '../styles/RoomsPage.css';

const RoomsPage = () => {
  const [bookingData, setBookingData] = useState({
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    name: '',
    phone: '',
    email: ''
  });

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted! We will contact you shortly.');
    console.log('Booking data:', bookingData);
  };

  return (
    <div className="rooms-page">
      {/* Hero Banner */}
      <section className="rooms-hero">
        <div className="rooms-hero-overlay"></div>
        <div className="rooms-hero-content">
          <h1 className="royal-heading">Luxury Rooms & Suites</h1>
          <p>Experience royal comfort on the Pune-Nashik Highway</p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="rooms-showcase">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="royal-heading">Our Room Categories</h2>
            <p className="section-subtitle">Choose your perfect sanctuary</p>
          </div>

          <div className="rooms-grid">
            {rooms.map((room) => (
              <div key={room.id} className="room-card">
                <div className="room-image-container">
                  <img src={room.image} alt={room.category} />
                  <div className="room-price-badge">{room.price}</div>
                </div>
                <div className="room-details">
                  <h3>{room.category}</h3>
                  <p className="room-description">{room.description}</p>
                  <div className="room-features">
                    {room.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <Check size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="btn-gold"
                    onClick={() => setBookingData({ ...bookingData, roomType: room.category })}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="booking-form-section" id="booking-form">
        <div className="container-custom">
          <div className="booking-form-wrapper">
            <div className="booking-form-header">
              <h2 className="royal-heading">Book Your Stay</h2>
              <p>Fill out the form below and we'll confirm your reservation</p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="roomType">Room Type</label>
                  <select 
                    id="roomType"
                    name="roomType" 
                    value={bookingData.roomType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Room Type</option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.category}>{room.category}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleInputChange}
                    min="1"
                    max="6"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="checkIn">Check-In Date</label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={bookingData.checkIn}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="checkOut">Check-Out Date</label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={bookingData.checkOut}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <button type="submit" className="btn-gold submit-btn">
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="royal-heading">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className={`faq-question ${activeAccordion === index ? 'active' : ''}`}
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{activeAccordion === index ? '−' : '+'}</span>
                </button>
                <div className={`faq-answer ${activeAccordion === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Walkthrough Placeholder */}
      <section className="video-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="royal-heading">Virtual Tour</h2>
            <p className="section-subtitle">Take a walk through our property</p>
          </div>
          <div className="video-placeholder">
            <div className="video-overlay">
              <div className="play-button">▶</div>
              <p>Video walkthrough coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
