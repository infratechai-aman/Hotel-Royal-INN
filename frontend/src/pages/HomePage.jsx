import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, MapPin, Phone, Calendar } from 'lucide-react';
import { heroSlides, amenities, reviews, offers, galleryImages } from '../data/mock';
import '../styles/HomePage.css';
import '../styles/HomePage_Updates.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
            </div>
          ))}
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">{heroSlides[currentSlide].title}</h1>
          <p className="hero-subtitle">{heroSlides[currentSlide].subtitle}</p>
          <p className="hero-tagline">Comfort. Taste. Convenience on the Pune-Nashik Highway.</p>
          
          <div className="hero-ctas">
            <Link to="/booking" className="hero-btn primary">
              <Calendar size={20} />
              Book a Room
            </Link>
            <Link to="/restobar" className="hero-btn secondary">
              Reserve Table
            </Link>
            <Link to="/restobar" className="hero-btn secondary">
              View Menu
            </Link>
          </div>
        </div>

        <button className="hero-nav prev" onClick={prevSlide}>
          <ChevronLeft size={32} />
        </button>
        <button className="hero-nav next" onClick={nextSlide}>
          <ChevronRight size={32} />
        </button>

        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="highlights-section">
        <div className="container-custom">
          <div className="highlights-grid">
            {amenities.slice(0, 6).map((amenity, index) => {
              const IconComponent = require('lucide-react')[amenity.icon];
              return (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3>{amenity.title}</h3>
                  <p>{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="offers-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="royal-heading">Special Offers</h2>
            <p className="section-subtitle">Exclusive deals for our valued guests</p>
          </div>
          <div className="offers-grid">
            {offers.map((offer) => (
              <div key={offer.id} className="offer-card">
                <div className="offer-badge">{offer.discount}</div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <div className="offer-validity">Valid till: {offer.validTill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="royal-heading">Gallery</h2>
            <p className="section-subtitle">A glimpse of Royal Inn experience</p>
          </div>
          <div className="gallery-preview-grid">
            {galleryImages.slice(0, 6).map((image) => (
              <div key={image.id} className="gallery-preview-item">
                <img src={image.url} alt={image.title} />
                <div className="gallery-preview-overlay">
                  <span>{image.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/gallery" className="btn-gold">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="reviews-section">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="royal-heading">What Our Guests Say</h2>
            <p className="section-subtitle">Testimonials from satisfied travelers</p>
          </div>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--gold-700)" color="var(--gold-700)" />
                  ))}
                </div>
                <p className="review-comment">"{review.comment}"</p>
                <div className="review-author">
                  <strong>{review.name}</strong>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="location-section">
        <div className="container-custom">
          <div className="location-grid">
            <div className="location-info">
              <h2 className="royal-heading">Find Us on Pune-Nashik Highway</h2>
              <p>Conveniently located at Kurali, we're your perfect stop for rest and refreshment on your journey.</p>
              
              <div className="location-details">
                <div className="location-item">
                  <MapPin size={24} />
                  <div>
                    <strong>Address</strong>
                    <p>Pune-Nashik Highway, Opposite Highway Industries, Kurali, Maharashtra</p>
                  </div>
                </div>
                <div className="location-item">
                  <Phone size={24} />
                  <div>
                    <strong>Contact</strong>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <Link to="/location" className="btn-primary">
                Get Directions
              </Link>
            </div>
            <div className="location-map">
              <iframe
                title="Royal Inn Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.123456789012!2d73.123456!3d19.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI0LjQiTiA3M8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
