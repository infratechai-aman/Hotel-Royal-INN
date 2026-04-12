import React, { useState, useEffect } from 'react'; import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'; import { contactInfo } from '../data/mock'; import { initScrollReveal } from '../hooks/useAnimations'; import '../styles/ContactPage.css';
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  useEffect(() => { const t = setTimeout(() => initScrollReveal(), 100); return () => clearTimeout(t); }, []);
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('Message sent!'); };
  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content"><h1 className="royal-heading">Contact Us</h1><p>We're here to help you 24/7</p></div>
      </section>
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="contact-cards stagger-children">
            {[
              { icon: <Phone size={28} />, title: 'Call Us', lines: [`Reception: ${contactInfo.phone}`, `Restaurant: ${contactInfo.restaurantPhone}`], action: { label: 'Call Now', fn: () => window.location.href = `tel:${contactInfo.phone}` } },
              { icon: <MessageCircle size={28} />, title: 'WhatsApp', lines: ['Quick booking & queries', contactInfo.whatsapp], action: { label: 'Message Us', fn: () => window.open(`https://wa.me/${contactInfo.whatsapp.replace(/\+|\s/g, '')}`, '_blank') } },
              { icon: <Mail size={28} />, title: 'Email', lines: ['For detailed inquiries', contactInfo.email], action: { label: 'Send Email', href: `mailto:${contactInfo.email}` } },
              { icon: <Clock size={28} />, title: 'Hours', lines: ['24/7 Reception', 'Restaurant: 7 AM - 11 PM', 'Bar: 11 AM - 1 AM'] }
            ].map((card, i) => (
              <div key={i} className="contact-info-card glass-card" style={{ padding: '36px', textAlign: 'center' }}>
                <div className="contact-info-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                {card.lines.map((line, j) => <p key={j} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>{line}</p>)}
                {card.action && (card.action.href ? <a href={card.action.href} className="btn-gold" style={{ marginTop: '16px', padding: '10px 24px', fontSize: '0.75rem' }}>{card.action.label}</a> : <button className="btn-gold" onClick={card.action.fn} style={{ marginTop: '16px', padding: '10px 24px', fontSize: '0.75rem' }}>{card.action.label}</button>)}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: 'var(--section-padding) 0', background: 'rgba(0,0,0,0.15)' }}>
        <div className="container-custom">
          <div className="contact-layout">
            <div className="contact-form-side reveal">
              <h2 className="royal-heading" style={{ marginBottom: '8px' }}>Send Us a Message</h2>
              <div className="gold-line-left"></div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '0.92rem' }}>We'll respond within 24 hours</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group"><label>Name</label><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" required /></div>
                <div className="form-row">
                  <div className="form-group"><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@email.com" required /></div>
                  <div className="form-group"><label>Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" required /></div>
                </div>
                <div className="form-group"><label>Subject</label><input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What is this regarding?" required /></div>
                <div className="form-group"><label>Message</label><textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your message..." rows="5" required /></div>
                <button type="submit" className="btn-gold" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
            <div className="contact-map-side reveal">
              <div className="map-info glass-card" style={{ padding: '24px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <MapPin size={24} style={{ color: 'var(--gold-500)', flexShrink: 0 }} />
                <div><h3 style={{ fontSize: '1rem', marginBottom: '4px' }}>Visit Us</h3><p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{contactInfo.address}</p></div>
              </div>
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '400px' }}>
                <iframe title="Royal Inn" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.123456789012!2d73.123456!3d19.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI0LjQiTiA3M8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactPage;
