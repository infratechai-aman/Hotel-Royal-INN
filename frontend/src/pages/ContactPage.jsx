import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/mock';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you shortly.');
    console.log('Contact form data:', formData);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\+|\s/g, '')}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="royal-heading">Contact Us</h1>
          <p>We're here to help you 24/7</p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container-custom">
          <div className="contact-info-grid">
            <div className="info-card">
              <div className="info-icon">
                <Phone size={32} />
              </div>
              <h3>Call Us</h3>
              <p><strong>Reception:</strong> {contactInfo.phone}</p>
              <p><strong>Restaurant:</strong> {contactInfo.restaurantPhone}</p>
              <button className="btn-gold" onClick={handleCall}>
                Call Now
              </button>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <MessageCircle size={32} />
              </div>
              <h3>WhatsApp</h3>
              <p>Quick booking & queries</p>
              <p><strong>{contactInfo.whatsapp}</strong></p>
              <button className="btn-gold" onClick={handleWhatsApp}>
                Message on WhatsApp
              </button>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Mail size={32} />
              </div>
              <h3>Email Us</h3>
              <p>For detailed inquiries</p>
              <p><strong>{contactInfo.email}</strong></p>
              <a href={`mailto:${contactInfo.email}`} className="btn-gold">
                Send Email
              </a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Clock size={32} />
              </div>
              <h3>Operating Hours</h3>
              <p>{contactInfo.hours}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container-custom">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2 className="royal-heading">Send Us a Message</h2>
              <p className="form-subtitle">Fill out the form below and we'll respond within 24 hours</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    rows="6"
                    required
                  />
                </div>

                <button type="submit" className="btn-gold submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-map">
              <div className="location-info">
                <MapPin size={32} />
                <h3>Visit Us</h3>
                <p>{contactInfo.address}</p>
              </div>
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

      {/* Floating Call Button */}
      <button className="floating-call-btn" onClick={handleCall}>
        <Phone size={24} />
      </button>
    </div>
  );
};

export default ContactPage;
