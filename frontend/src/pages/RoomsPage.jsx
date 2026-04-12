import React, { useState, useEffect } from 'react';
import { Calendar, Users, Check } from 'lucide-react';
import { rooms, faqs } from '../data/mock';
import { initScrollReveal } from '../hooks/useAnimations';
import '../styles/RoomsPage.css';

const RoomsPage = () => {
  const [bookingData, setBookingData] = useState({
    roomType: '', checkIn: '', checkOut: '', guests: 2,
    name: '', phone: '', email: ''
  });
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => initScrollReveal(), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted! We will contact you shortly.');
  };

  return (
    <div className="rooms-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1 className="royal-heading">Luxury Rooms & Suites</h1>
          <p>Experience royal comfort on the Pune-Nashik Highway</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="section-header reveal">
            <h2 className="royal-heading">Our Room Categories</h2>
            <p className="section-subtitle">Choose your perfect sanctuary</p>
          </div>
          <div className="rooms-grid stagger-children">
            {rooms.map((room) => (
              <div key={room.id} className="room-card glass-card">
                <div className="room-card__image">
                  <img src={room.image} alt={room.category} loading="lazy" />
                  <div className="room-card__price">{room.price}</div>
                </div>
                <div className="room-card__details">
                  <h3>{room.category}</h3>
                  <p className="room-card__desc">{room.description}</p>
                  <div className="room-card__features">
                    {room.features.map((feature, index) => (
                      <div key={index} className="room-card__feature">
                        <Check size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-gold" onClick={() => setBookingData({ ...bookingData, roomType: room.category })}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-section" id="booking-form" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="booking-form-wrapper glass-card-heavy">
            <div className="section-header">
              <h2 className="royal-heading">Book Your Stay</h2>
              <p className="section-subtitle">Fill out the form and we'll confirm your reservation</p>
            </div>
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="roomType">Room Type</label>
                  <select id="roomType" name="roomType" value={bookingData.roomType} onChange={handleInputChange} required>
                    <option value="">Select Room Type</option>
                    {rooms.map((room) => (<option key={room.id} value={room.category}>{room.category}</option>))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="guests"><Users size={14} /> Guests</label>
                  <input type="number" id="guests" name="guests" value={bookingData.guests} onChange={handleInputChange} min="1" max="6" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="checkIn"><Calendar size={14} /> Check-In</label>
                  <input type="date" id="checkIn" name="checkIn" value={bookingData.checkIn} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="checkOut"><Calendar size={14} /> Check-Out</label>
                  <input type="date" id="checkOut" name="checkOut" value={bookingData.checkOut} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="bname">Full Name</label>
                  <input type="text" id="bname" name="name" value={bookingData.name} onChange={handleInputChange} placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="bphone">Phone</label>
                  <input type="tel" id="bphone" name="phone" value={bookingData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="bemail">Email</label>
                <input type="email" id="bemail" name="email" value={bookingData.email} onChange={handleInputChange} placeholder="your@email.com" required />
              </div>
              <button type="submit" className="btn-gold" style={{ width: '100%', marginTop: '8px' }}>Submit Booking Request</button>
            </form>
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="section-header reveal">
            <h2 className="royal-heading">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know</p>
          </div>
          <div className="faq-list reveal">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item glass-card" style={{ marginBottom: '12px', borderRadius: '8px' }}>
                <button className={`faq-question ${activeAccordion === index ? 'active' : ''}`} onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}>
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
    </div>
  );
};

export default RoomsPage;
