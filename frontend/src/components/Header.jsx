import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/restobar', label: 'Restobar' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/amenities', label: 'Amenities' },
    { path: '/location', label: 'Location' },
    { path: '/blog', label: 'Updates' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          {/* Logo */}
          <Link to="/" className="header__logo">
            <div className="header__logo-icon">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <rect x="2" y="2" width="36" height="36" rx="4" stroke="url(#gold-grad)" strokeWidth="2" fill="none"/>
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="url(#gold-grad)" fontFamily="Playfair Display" fontSize="18" fontWeight="700">R</text>
                <defs>
                  <linearGradient id="gold-grad" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#f7c131"/>
                    <stop offset="100%" stopColor="#d4af37"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="header__logo-text">
              <span className="header__logo-name">ROYAL INN</span>
              <span className="header__logo-tagline">LUXURY HOTEL</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="header__nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
              >
                {link.label}
                <span className="header__nav-underline"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="header__actions">
            <a href="tel:+919876543210" className="header__phone">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </a>
            <Link to="/booking" className="header__book-btn">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="header__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__backdrop" onClick={() => setIsMobileMenuOpen(false)} />
        <div className="mobile-menu__panel">
          <div className="mobile-menu__header">
            <div className="header__logo-text">
              <span className="header__logo-name">ROYAL INN</span>
              <span className="header__logo-tagline">LUXURY HOTEL</span>
            </div>
          </div>
          <nav className="mobile-menu__nav">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-menu__link ${location.pathname === link.path ? 'mobile-menu__link--active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu__footer">
            <Link to="/booking" className="btn-gold" onClick={() => setIsMobileMenuOpen(false)}>
              Book Now
            </Link>
            <a href="tel:+919876543210" className="mobile-menu__phone">
              <Phone size={16} />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
