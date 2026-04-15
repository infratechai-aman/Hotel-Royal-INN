import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Gold top border */}
      <div className="footer__border"></div>

      <div className="footer__content">
        {/* Brand Column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="2" y="2" width="36" height="36" rx="4" stroke="url(#footer-gold)" strokeWidth="2" fill="none"/>
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="url(#footer-gold)" fontFamily="Playfair Display" fontSize="18" fontWeight="700">R</text>
              <defs>
                <linearGradient id="footer-gold" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#f7c131"/>
                  <stop offset="100%" stopColor="#d4af37"/>
                </linearGradient>
              </defs>
            </svg>
            <div>
              <h3 className="footer__brand-name">ROYAL INN</h3>
              <span className="footer__brand-tagline">LUXURY HOTEL</span>
            </div>
          </div>
          <p className="footer__description">
            Your premium destination on the Pune-Nashik Highway. Experience luxury accommodation, fine dining, and exceptional hospitality.
          </p>
          <div className="footer__social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__section">
          <h4 className="footer__section-title">Quick Links</h4>
          <div className="footer__section-line"></div>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms & Suites</Link></li>
            <li><Link to="/restobar">Restobar & Lounge</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/amenities">Amenities</Link></li>
            <li><Link to="/booking">Book Now</Link></li>
          </ul>
        </div>

        {/* Information */}
        <div className="footer__section">
          <h4 className="footer__section-title">Information</h4>
          <div className="footer__section-line"></div>
          <ul className="footer__links">
            <li><Link to="/location">Location & Directions</Link></li>
            <li><Link to="/blog">News & Updates</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__section">
          <h4 className="footer__section-title">Contact</h4>
          <div className="footer__section-line"></div>
          <div className="footer__contact">
            <div className="footer__contact-item">
              <MapPin size={16} />
              <span>Pune-Nashik Highway, Kurali<br/>Maharashtra, India</span>
            </div>
            <div className="footer__contact-item">
              <Phone size={16} />
              <div>
                <a href="tel:+919922551414">+91 99225 51414</a>
                <small>Reception</small>
              </div>
            </div>
            <div className="footer__contact-item">
              <Mail size={16} />
              <a href="mailto:info@royalinn.com">info@royalinn.com</a>
            </div>
            <div className="footer__contact-item">
              <Clock size={16} />
              <span>24/7 Reception<br/>Restaurant: 7 AM - 11 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-content">
          <p>&copy; {new Date().getFullYear()} Hotel Royal INN. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="footer__divider">|</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
