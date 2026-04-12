import React, { useEffect } from 'react';
import { amenities } from '../data/mock';
import { initScrollReveal } from '../hooks/useAnimations';
import '../styles/AmenitiesPage.css';

const AmenitiesPage = () => {
  useEffect(() => { const t = setTimeout(() => initScrollReveal(), 100); return () => clearTimeout(t); }, []);

  return (
    <div className="amenities-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1 className="royal-heading">Premium Amenities</h1>
          <p>Comfort and convenience at every step</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="section-header reveal">
            <h2 className="royal-heading">Our Facilities</h2>
            <p className="section-subtitle">Everything you need for a comfortable stay</p>
          </div>
          <div className="amenities-grid stagger-children">
            {amenities.map((amenity, index) => {
              const IconComponent = require('lucide-react')[amenity.icon];
              return (
                <div key={index} className="amenity-card glass-card" style={{ padding: '40px 28px', textAlign: 'center' }}>
                  <div className="amenity-icon"><IconComponent size={40} /></div>
                  <h3>{amenity.title}</h3>
                  <p>{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0', background: 'rgba(0,0,0,0.15)' }}>
        <div className="container-custom">
          <div className="features-list">
            {[
              { img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', title: 'Highway Convenience', desc: 'Strategically located on the Pune-Nashik Highway at Kurali, Royal Inn offers the perfect stop for travelers. Easy access, ample parking, and round-the-clock service.' },
              { img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800', title: 'Safety & Security', desc: 'Your safety is our priority. With 24/7 CCTV surveillance, trained security personnel, and well-lit premises, we ensure complete peace of mind.' },
              { img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', title: 'Family Friendly', desc: 'We welcome families with open arms. Our spacious family suites, child-friendly facilities, and dedicated staff ensure a comfortable stay for all ages.' }
            ].map((feature, i) => (
              <div key={i} className={`feature-row ${i % 2 === 1 ? 'reverse' : ''} reveal`}>
                <div className="feature-image" style={{ backgroundImage: `url('${feature.img}')` }}></div>
                <div className="feature-content">
                  <h2 className="royal-heading">{feature.title}</h2>
                  <div className="gold-line-left"></div>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default AmenitiesPage;
