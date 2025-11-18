import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img 
            src="https://customer-assets.emergentagent.com/job_23ee9619-2ef0-4185-88e6-c4a32cf51562/artifacts/zedrn4ee_WhatsApp_Image_2025-11-18_at_16.59.34-removebg-preview.png" 
            alt="Royal Inn Logo" 
            className="footer-logo"
          />
          <h3 className="footer-brand">ROYAL INN</h3>
          <p className="footer-tagline">Comfort. Taste. Convenience.</p>
          <p className="footer-description">
            Your premium stop on the Pune-Nashik Highway. Experience luxury accommodation and fine dining.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rooms">Rooms & Suites</Link></li>
            <li><Link to="/restobar">Restobar & Lounge</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/amenities">Amenities</Link></li>
            <li><Link to="/booking">Book Now</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Information</h4>
          <ul className="footer-links">
            <li><Link to="/location">Location & Directions</Link></li>
            <li><Link to="/blog">News & Updates</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/admin">Admin Login</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <div className="footer-contact">
            <div className="contact-item">
              <MapPin size={18} />
              <span>Pune-Nashik Highway, Kurali<br />Maharashtra, India</span>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <div>
                <a href="tel:+919876543210">+91 98765 43210</a>
                <span className="contact-label">Reception</span>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={18} />
              <div>
                <a href="tel:+919876543211">+91 98765 43211</a>
                <span className="contact-label">Restaurant</span>
              </div>
            </div>
            <div className="contact-item">
              <Clock size={18} />
              <span>24/7 Reception<br />Restaurant: 7 AM - 11 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 Royal Inn. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
