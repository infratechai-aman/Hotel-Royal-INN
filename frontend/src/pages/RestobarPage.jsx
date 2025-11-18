import React, { useState } from 'react';
import { UtensilsCrossed, Wine, Clock, Calendar } from 'lucide-react';
import { foodMenu, drinksMenu, events } from '../data/mock';
import '../styles/RestobarPage.css';

const RestobarPage = () => {
  const [activeMenu, setActiveMenu] = useState('food');
  const [reservationData, setReservationData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 2
  });

  const handleInputChange = (e) => {
    setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Table reservation request submitted! We will confirm shortly.');
    console.log('Reservation data:', reservationData);
  };

  return (
    <div className="restobar-page">
      {/* Hero Section */}
      <section className="restobar-hero">
        <div className="restobar-hero-overlay"></div>
        <div className="restobar-hero-content">
          <h1 className="royal-heading">Restobar & Lounge</h1>
          <p>Exquisite dining and premium beverages</p>
        </div>
      </section>

      {/* Ambience Showcase */}
      <section className="ambience-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="royal-heading">Experience Fine Dining</h2>
            <p className="section-subtitle">Where taste meets elegance</p>
          </div>

          <div className="ambience-grid">
            <div className="ambience-card">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" alt="Restaurant" />
              <div className="ambience-overlay">
                <h3>Restaurant Area</h3>
                <p>Elegant dining space</p>
              </div>
            </div>
            <div className="ambience-card">
              <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600" alt="Bar" />
              <div className="ambience-overlay">
                <h3>Premium Bar</h3>
                <p>Finest spirits & cocktails</p>
              </div>
            </div>
            <div className="ambience-card">
              <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" alt="Lounge" />
              <div className="ambience-overlay">
                <h3>Lounge Area</h3>
                <p>Relax and unwind</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="royal-heading">Our Menu</h2>
            <p className="section-subtitle">Culinary excellence in every dish</p>
          </div>

          <div className="menu-tabs">
            <button 
              className={`menu-tab ${activeMenu === 'food' ? 'active' : ''}`}
              onClick={() => setActiveMenu('food')}
            >
              <UtensilsCrossed size={20} />
              Food Menu
            </button>
            <button 
              className={`menu-tab ${activeMenu === 'drinks' ? 'active' : ''}`}
              onClick={() => setActiveMenu('drinks')}
            >
              <Wine size={20} />
              Drinks Menu
            </button>
          </div>

          <div className="menu-content">
            {activeMenu === 'food' && (
              <div className="menu-grid">
                {foodMenu.map((category, idx) => (
                  <div key={idx} className="menu-category">
                    <h3 className="category-title">{category.category}</h3>
                    <div className="menu-items">
                      {category.items.map((item, index) => (
                        <div key={index} className="menu-item">
                          <div className="menu-item-header">
                            <span className="menu-item-name">
                              {item.name}
                              {item.veg !== undefined && (
                                <span className={`veg-indicator ${item.veg ? 'veg' : 'non-veg'}`}>
                                  {item.veg ? '●' : '▲'}
                                </span>
                              )}
                            </span>
                            <span className="menu-item-price">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeMenu === 'drinks' && (
              <div className="menu-grid">
                {drinksMenu.map((category, idx) => (
                  <div key={idx} className="menu-category">
                    <h3 className="category-title">{category.category}</h3>
                    <div className="menu-items">
                      {category.items.map((item, index) => (
                        <div key={index} className="menu-item">
                          <div className="menu-item-header">
                            <span className="menu-item-name">{item.name}</span>
                            <span className="menu-item-price">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Today's Specials & Happy Hours */}
      <section className="specials-section">
        <div className="container-custom">
          <div className="specials-grid">
            <div className="special-card">
              <div className="special-icon">
                <UtensilsCrossed size={40} />
              </div>
              <h3>Today's Special</h3>
              <p className="special-dish">Chef's Signature Butter Chicken</p>
              <p className="special-price">₹380</p>
              <p className="special-desc">Tender chicken in creamy tomato gravy</p>
            </div>
            
            <div className="special-card highlight">
              <div className="special-icon">
                <Clock size={40} />
              </div>
              <h3>Happy Hours</h3>
              <p className="special-dish">5:00 PM - 7:00 PM</p>
              <p className="special-price">Buy 1 Get 1 Free</p>
              <p className="special-desc">On selected cocktails and beverages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="royal-heading">Upcoming Events</h2>
            <p className="section-subtitle">Experience entertainment at its finest</p>
          </div>

          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <div className="event-info">
                    <div className="event-info-item">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="event-info-item">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table Reservation Form */}
      <section className="reservation-section">
        <div className="container-custom">
          <div className="reservation-wrapper">
            <div className="reservation-header">
              <h2 className="royal-heading">Reserve Your Table</h2>
              <p>Book your dining experience in advance</p>
            </div>

            <form onSubmit={handleSubmit} className="reservation-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={reservationData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={reservationData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={reservationData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={reservationData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={reservationData.guests}
                    onChange={handleInputChange}
                    min="1"
                    max="20"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-gold submit-btn">
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestobarPage;
