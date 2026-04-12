import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Calendar, Users, Award, Clock, ArrowRight, Car, Shield, Wifi, MapPin } from 'lucide-react';
import { heroSlides, amenities, reviews, offers, galleryImages } from '../data/mock';
import { useCountUp, initScrollReveal } from '../hooks/useAnimations';
import '../styles/HomePage.css';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const heroRef = useRef(null);

  // Count-up stats
  const [guestRef, guestCount] = useCountUp(500, 2000);
  const [roomRef, roomCount] = useCountUp(50, 1800);
  const [ratingRef, ratingCount] = useCountUp(48, 1500);
  const [serviceRef, serviceCount] = useCountUp(24, 1200);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.4);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize scroll reveal
  useEffect(() => {
    const timer = setTimeout(() => {
      initScrollReveal();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="homepage">
      {/* ═══════ CINEMATIC HERO ═══════ */}
      <section className="hero" ref={heroRef}>
        {/* Video Background */}
        <div className="hero__video-container">
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            poster={heroSlides[0].image}
          >
            <source src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
          <div className="hero__video-overlay"></div>
        </div>

        {/* Slide Images (stacked behind video for fallback) */}
        <div className="hero__slides">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: `translateY(${parallaxOffset * 0.3}px)`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-line">{heroSlides[currentSlide].title}</span>
          </h1>
          <p className="hero__subtitle">{heroSlides[currentSlide].subtitle}</p>
          <p className="hero__tagline">Comfort · Taste · Convenience — Pune-Nashik Highway</p>

          <div className="hero__ctas">
            <Link to="/booking" className="btn-gold hero__btn">
              <Calendar size={18} />
              Book Your Stay
            </Link>
            <Link to="/restobar" className="btn-outline hero__btn">
              Reserve Table
            </Link>
          </div>
        </div>

        {/* Slide Navigation */}
        <button className="hero__nav hero__nav--prev" onClick={prevSlide} aria-label="Previous slide">
          <ChevronLeft size={28} />
        </button>
        <button className="hero__nav hero__nav--next" onClick={nextSlide} aria-label="Next slide">
          <ChevronRight size={28} />
        </button>

        {/* Slide Indicators */}
        <div className="hero__indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero__indicator ${index === currentSlide ? 'hero__indicator--active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ═══════ STATS COUNTER ═══════ */}
      <section className="stats">
        <div className="stats__container container-custom">
          <div className="stats__item" ref={guestRef}>
            <Users size={28} className="stats__icon" />
            <span className="stats__number">{guestCount}+</span>
            <span className="stats__label">Happy Guests</span>
          </div>
          <div className="stats__divider"></div>
          <div className="stats__item" ref={roomRef}>
            <Award size={28} className="stats__icon" />
            <span className="stats__number">{roomCount}+</span>
            <span className="stats__label">Luxury Rooms</span>
          </div>
          <div className="stats__divider"></div>
          <div className="stats__item" ref={ratingRef}>
            <Star size={28} className="stats__icon" />
            <span className="stats__number">{(ratingCount / 10).toFixed(1)}★</span>
            <span className="stats__label">Guest Rating</span>
          </div>
          <div className="stats__divider"></div>
          <div className="stats__item" ref={serviceRef}>
            <Clock size={28} className="stats__icon" />
            <span className="stats__number">{serviceCount}/7</span>
            <span className="stats__label">Service</span>
          </div>
        </div>
      </section>

      {/* ═══════ AMENITIES / HIGHLIGHTS — BENTO GRID ═══════ */}
      <section className="highlights" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="section-header reveal">
            <h2 className="royal-heading">The Royal Experience</h2>
            <p className="section-subtitle">World-class amenities for discerning guests</p>
          </div>

          <div className="bento stagger-children">
            {/* Large — Room Image Card */}
            <div className="bento__card bento__card--tall bento__card--image">
              <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80" alt="Luxury Suite" loading="lazy" />
              <div className="bento__card-overlay">
                <span className="bento__card-tag">Premium</span>
                <h3>Luxury Suites</h3>
                <p>King beds, premium amenities, and breathtaking comfort</p>
              </div>
            </div>

            {/* Compact Icon Cards */}
            <div className="bento__card bento__card--compact">
              <div className="bento__icon-row">
                <Clock size={22} />
                <div>
                  <h4>24/7 Front Desk</h4>
                  <p>Round-the-clock concierge at your service</p>
                </div>
              </div>
            </div>

            <div className="bento__card bento__card--compact">
              <div className="bento__icon-row">
                <Car size={22} />
                <div>
                  <h4>Free Valet Parking</h4>
                  <p>Secure, well-lit parking for all guests</p>
                </div>
              </div>
            </div>

            {/* Medium — Dining Image Card */}
            <div className="bento__card bento__card--medium bento__card--image">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="Fine Dining" loading="lazy" />
              <div className="bento__card-overlay">
                <span className="bento__card-tag">Dining</span>
                <h3>Bar & Restaurant</h3>
                <p>Fine dining & premium spirits</p>
              </div>
            </div>

            <div className="bento__card bento__card--compact">
              <div className="bento__icon-row">
                <MapPin size={22} />
                <div>
                  <h4>Highway Access</h4>
                  <p>Prime location on Pune-Nashik Highway</p>
                </div>
              </div>
            </div>

            <div className="bento__card bento__card--compact">
              <div className="bento__icon-row">
                <Shield size={22} />
                <div>
                  <h4>CCTV & Security</h4>
                  <p>24/7 surveillance keeping you safe</p>
                </div>
              </div>
            </div>

            <div className="bento__card bento__card--compact">
              <div className="bento__icon-row">
                <Users size={22} />
                <div>
                  <h4>Family Friendly</h4>
                  <p>Comfortable stays for all ages</p>
                </div>
              </div>
            </div>

            <div className="bento__card bento__card--compact">
              <div className="bento__icon-row">
                <Wifi size={22} />
                <div>
                  <h4>High-Speed WiFi</h4>
                  <p>Stay seamlessly connected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PARALLAX DIVIDER ═══════ */}
      <section className="parallax-divider">
        <div
          className="parallax-divider__bg"
          style={{ transform: `translateY(${parallaxOffset * 0.15}px)` }}
        ></div>
        <div className="parallax-divider__overlay"></div>
        <div className="parallax-divider__content reveal">
          <h2 className="royal-heading">A Destination, Not Just a Stop</h2>
          <p>Strategically located on the Pune-Nashik Highway at Kurali</p>
          <Link to="/rooms" className="btn-outline" style={{ marginTop: '24px' }}>
            Explore Rooms <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ═══════ SPECIAL OFFERS ═══════ */}
      <section className="offers" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="section-header reveal">
            <h2 className="royal-heading">Exclusive Offers</h2>
            <p className="section-subtitle">Curated deals for our valued guests</p>
          </div>

          <div className="offers__grid stagger-children">
            {offers.map((offer) => (
              <div key={offer.id} className="offers__card glass-card">
                <div className="offers__badge">{offer.discount}</div>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <div className="offers__validity">Valid: {offer.validTill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ GALLERY PREVIEW ═══════ */}
      <section className="gallery-preview" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="section-header reveal">
            <h2 className="royal-heading">Visual Journey</h2>
            <p className="section-subtitle">A glimpse of the Royal Inn experience</p>
          </div>

          <div className="gallery-preview__grid stagger-children">
            {galleryImages.slice(0, 6).map((image) => (
              <div key={image.id} className="gallery-preview__item">
                <img src={image.url} alt={image.title} loading="lazy" />
                <div className="gallery-preview__overlay">
                  <span>{image.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-preview__cta reveal">
            <Link to="/gallery" className="btn-outline">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ REVIEWS ═══════ */}
      <section className="reviews" style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="section-header reveal">
            <h2 className="royal-heading">Guest Testimonials</h2>
            <p className="section-subtitle">Words from our cherished visitors</p>
          </div>

          <div className="reviews__grid stagger-children">
            {reviews.map((review) => (
              <div key={review.id} className="reviews__card glass-card">
                <div className="reviews__stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#d4af37" color="#d4af37" />
                  ))}
                </div>
                <p className="reviews__quote">"{review.comment}"</p>
                <div className="reviews__author">
                  <div className="reviews__avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FLOATING BOOKING CTA ═══════ */}
      <div className="floating-cta">
        <div className="floating-cta__inner">
          <span className="floating-cta__text">Ready for a royal experience?</span>
          <Link to="/booking" className="btn-gold floating-cta__btn">
            <Calendar size={16} />
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
