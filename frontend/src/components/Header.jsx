import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img 
            src="https://customer-assets.emergentagent.com/job_23ee9619-2ef0-4185-88e6-c4a32cf51562/artifacts/zedrn4ee_WhatsApp_Image_2025-11-18_at_16.59.34-removebg-preview.png" 
            alt="Royal Inn Logo" 
            className="logo-image"
          />
          <span className="logo-text">ROYAL INN</span>
        </Link>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a href="tel:+919876543210" className="header-phone">
            <Phone size={18} />
            <span>+91 98765 43210</span>
          </a>
          <Link to="/booking" className="btn-book">
            Book Now
          </Link>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
