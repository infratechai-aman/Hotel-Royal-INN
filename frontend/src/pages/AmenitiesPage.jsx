import React from 'react';
import { amenities } from '../data/mock';
import '../styles/AmenitiesPage.css';

const AmenitiesPage = () => {
  return (
    <div className="amenities-page">
      <section className="amenities-hero">
        <div className="amenities-hero-overlay"></div>
        <div className="amenities-hero-content">
          <h1 className="royal-heading">Premium Amenities</h1>
          <p>Comfort and convenience at every step</p>
        </div>
      </section>

      <section className="amenities-showcase">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="royal-heading">Our Facilities</h2>
            <p className="section-subtitle">Everything you need for a comfortable stay</p>
          </div>

          <div className="amenities-grid">
            {amenities.map((amenity, index) => {
              const IconComponent = require('lucide-react')[amenity.icon];
              return (
                <div key={index} className="amenity-card">
                  <div className="amenity-icon">
                    <IconComponent size={48} />
                  </div>
                  <h3>{amenity.title}</h3>
                  <p>{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container-custom">
          <div className="features-grid">
            <div className="feature-highlight">
              <div className="feature-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800')" }}></div>
              <div className="feature-content">
                <h2 className="royal-heading">Highway Convenience</h2>
                <p>Strategically located on the Pune-Nashik Highway at Kurali, Royal Inn offers the perfect stop for travelers. Easy access, ample parking, and round-the-clock service make us your ideal highway companion.</p>
              </div>
            </div>

            <div className="feature-highlight reverse">
              <div className="feature-content">
                <h2 className="royal-heading">Safety & Security</h2>
                <p>Your safety is our priority. With 24/7 CCTV surveillance, trained security personnel, and well-lit premises, we ensure you can relax with complete peace of mind throughout your stay.</p>
              </div>
              <div className="feature-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800')" }}></div>
            </div>

            <div className="feature-highlight">
              <div className="feature-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800')" }}></div>
              <div className="feature-content">
                <h2 className="royal-heading">Family Friendly</h2>
                <p>We welcome families with open arms. Our spacious family suites, child-friendly facilities, and dedicated staff ensure a comfortable and memorable stay for guests of all ages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;
