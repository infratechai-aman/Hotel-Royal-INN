import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Wine, Clock, Calendar } from 'lucide-react';
import { foodMenu, drinksMenu, events } from '../data/mock';
import { initScrollReveal } from '../hooks/useAnimations';
import '../styles/RestobarPage.css';

const RestobarPage = () => {
  const [activeMenu, setActiveMenu] = useState('food');
  const [reservationData, setReservationData] = useState({ name: '', phone: '', date: '', time: '', guests: 2 });

  useEffect(() => { const t = setTimeout(() => initScrollReveal(), 100); return () => clearTimeout(t); }, []);

  const handleInputChange = (e) => setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('Table reservation submitted!'); };

  return (
    <div className="restobar-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1 className="royal-heading">Restobar & Lounge</h1>
          <p>Exquisite dining and premium beverages</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="section-header reveal">
            <h2 className="royal-heading">Experience Fine Dining</h2>
            <p className="section-subtitle">Where taste meets elegance</p>
          </div>
          <div className="ambience-grid stagger-children">
            {[
              { img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800', title: 'Restaurant Area', desc: 'Elegant dining space' },
              { img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800', title: 'Premium Bar', desc: 'Finest spirits & cocktails' },
              { img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', title: 'Lounge Area', desc: 'Relax and unwind' }
            ].map((item, i) => (
              <div key={i} className="ambience-card">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="ambience-card__overlay">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0', background: 'rgba(0,0,0,0.15)' }}>
        <div className="container-custom">
          <div className="section-header reveal">
            <h2 className="royal-heading">Our Menu</h2>
            <p className="section-subtitle">Culinary excellence in every dish</p>
          </div>
          <div className="menu-tabs reveal">
            <button className={`menu-tab ${activeMenu === 'food' ? 'active' : ''}`} onClick={() => setActiveMenu('food')}>
              <UtensilsCrossed size={18} /> Food Menu
            </button>
            <button className={`menu-tab ${activeMenu === 'drinks' ? 'active' : ''}`} onClick={() => setActiveMenu('drinks')}>
              <Wine size={18} /> Drinks Menu
            </button>
          </div>
          <div className="menu-content stagger-children">
            {(activeMenu === 'food' ? foodMenu : drinksMenu).map((category, idx) => (
              <div key={idx} className="menu-category glass-card" style={{ padding: '32px', marginBottom: '20px' }}>
                <h3 className="category-title">{category.category}</h3>
                <div className="menu-items">
                  {category.items.map((item, index) => (
                    <div key={index} className="menu-item">
                      <span className="menu-item__name">
                        {item.name}
                        {item.veg !== undefined && <span className={`veg-badge ${item.veg ? 'veg' : 'non-veg'}`}>{item.veg ? '●' : '▲'}</span>}
                      </span>
                      <span className="menu-item__dots"></span>
                      <span className="menu-item__price">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="specials-grid reveal">
            <div className="special-card glass-card" style={{ padding: '40px', textAlign: 'center' }}>
              <UtensilsCrossed size={36} className="special-icon" />
              <h3>Today's Special</h3>
              <p className="special-dish">Chef's Signature Butter Chicken</p>
              <p className="special-price">₹380</p>
              <p className="special-desc">Tender chicken in creamy tomato gravy</p>
            </div>
            <div className="special-card glass-card highlight" style={{ padding: '40px', textAlign: 'center' }}>
              <Clock size={36} className="special-icon" />
              <h3>Happy Hours</h3>
              <p className="special-dish">5:00 PM - 7:00 PM</p>
              <p className="special-price">Buy 1 Get 1 Free</p>
              <p className="special-desc">On selected cocktails and beverages</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0', background: 'rgba(0,0,0,0.15)' }}>
        <div className="container-custom">
          <div className="section-header reveal">
            <h2 className="royal-heading">Upcoming Events</h2>
            <p className="section-subtitle">Experience entertainment at its finest</p>
          </div>
          <div className="events-grid stagger-children">
            {events.map((event) => (
              <div key={event.id} className="event-card glass-card" style={{ overflow: 'hidden' }}>
                <div className="event-card__image">
                  <img src={event.image} alt={event.title} loading="lazy" />
                </div>
                <div className="event-card__details">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="event-card__info">
                    <span><Calendar size={14} /> {event.date}</span>
                    <span><Clock size={14} /> {event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="booking-form-wrapper glass-card-heavy" style={{ padding: '60px', maxWidth: '700px', margin: '0 auto' }}>
            <div className="section-header" style={{ marginBottom: '40px' }}>
              <h2 className="royal-heading">Reserve Your Table</h2>
              <p className="section-subtitle">Book your dining experience</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="rname">Name</label>
                  <input type="text" id="rname" name="name" value={reservationData.name} onChange={handleInputChange} placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="rphone">Phone</label>
                  <input type="tel" id="rphone" name="phone" value={reservationData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="rdate">Date</label>
                  <input type="date" id="rdate" name="date" value={reservationData.date} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="rtime">Time</label>
                  <input type="time" id="rtime" name="time" value={reservationData.time} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="rguests">Guests</label>
                  <input type="number" id="rguests" name="guests" value={reservationData.guests} onChange={handleInputChange} min="1" max="20" required />
                </div>
              </div>
              <button type="submit" className="btn-gold" style={{ width: '100%', marginTop: '8px' }}>Confirm Reservation</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestobarPage;
