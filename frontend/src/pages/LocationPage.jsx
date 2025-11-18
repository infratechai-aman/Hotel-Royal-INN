import React from 'react';
import { MapPin, Navigation, Phone, Car } from 'lucide-react';
import { contactInfo, nearbyPlaces } from '../data/mock';
import '../styles/LocationPage.css';

const LocationPage = () => {
  const openInGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/Pune-Nashik+Highway+Kurali', '_blank');
  };

  return (
    <div className="location-page">
      <section className="location-hero">
        <div className="location-hero-overlay"></div>
        <div className="location-hero-content">
          <h1 className="royal-heading">Location & Directions</h1>
          <p>Find us on the Pune-Nashik Highway</p>
        </div>
      </section>

      <section className="location-map-section">
        <div className="container-custom">
          <div className="map-container">
            <iframe
              title="Royal Inn Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.123456789012!2d73.123456!3d19.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI0LjQiTiA3M8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <button className="open-maps-btn" onClick={openInGoogleMaps}>
              <Navigation size={20} />
              Open in Google Maps
            </button>
          </div>
        </div>
      </section>

      <section className="address-section">
        <div className="container-custom">
          <div className="address-grid">
            <div className="address-card">
              <div className="address-icon">
                <MapPin size={40} />
              </div>
              <h3>Our Address</h3>
              <p>{contactInfo.address}</p>
            </div>

            <div className="address-card">
              <div className="address-icon">
                <Phone size={40} />
              </div>
              <h3>Contact Numbers</h3>
              <p><strong>Reception:</strong> {contactInfo.phone}</p>
              <p><strong>Restaurant:</strong> {contactInfo.restaurantPhone}</p>
            </div>

            <div className="address-card">
              <div className="address-icon">
                <Car size={40} />
              </div>
              <h3>Easy Access</h3>
              <p>Located on main highway</p>
              <p>Ample free parking available</p>
            </div>
          </div>
        </div>
      </section>

      <section className="directions-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="royal-heading">Driving Directions</h2>
            <p className="section-subtitle">Easy to find, easy to reach</p>
          </div>

          <div className="directions-grid">
            <div className="direction-card">
              <div className="direction-header">
                <h3>From Pune</h3>
                <span className="distance">~85 km</span>
              </div>
              <ol>
                <li>Take NH 60 towards Nashik from Pune</li>
                <li>Continue on Pune-Nashik Highway</li>
                <li>Pass through Chakan and Alephata</li>
                <li>Royal Inn is located at Kurali on your left</li>
                <li>Look for our royal blue signboard</li>
              </ol>
              <p className="travel-time">Approximate travel time: 1.5 hours</p>
            </div>

            <div className="direction-card">
              <div className="direction-header">
                <h3>From Nashik</h3>
                <span className="distance">~35 km</span>
              </div>
              <ol>
                <li>Take NH 60 towards Pune from Nashik</li>
                <li>Continue on Pune-Nashik Highway</li>
                <li>Pass through Sangamner</li>
                <li>Royal Inn is located at Kurali on your right</li>
                <li>Look for our royal blue signboard</li>
              </ol>
              <p className="travel-time">Approximate travel time: 45 minutes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="nearby-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="royal-heading">Nearby Landmarks</h2>
            <p className="section-subtitle">Points of interest around Royal Inn</p>
          </div>

          <div className="nearby-grid">
            {nearbyPlaces.map((place, index) => (
              <div key={index} className="nearby-card">
                <div className="nearby-icon">
                  <MapPin size={24} />
                </div>
                <div className="nearby-info">
                  <h4>{place.name}</h4>
                  <span className="nearby-distance">{place.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
