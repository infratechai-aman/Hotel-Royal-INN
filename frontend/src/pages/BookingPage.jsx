import React, { useState, useEffect } from 'react'; import { Calendar, Users, CreditCard, Check } from 'lucide-react'; import { rooms } from '../data/mock'; import { initScrollReveal } from '../hooks/useAnimations'; import '../styles/BookingPage.css';
const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({ roomType: '', checkIn: '', checkOut: '', guests: 2, name: '', phone: '', email: '', specialRequests: '' });
  useEffect(() => { const t = setTimeout(() => initScrollReveal(), 100); return () => clearTimeout(t); }, []);
  const handleInputChange = (e) => setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('Booking confirmed! You will receive a confirmation email shortly.'); };
  return (
    <div className="booking-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content"><h1 className="royal-heading">Book Your Stay</h1><p>Complete your reservation in 3 easy steps</p></div>
      </section>
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="booking-steps reveal">
            {['Select Room', 'Guest Details', 'Confirm & Pay'].map((label, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className={`step-line ${step > i ? 'active' : ''}`}></div>}
                <div className={`step-item ${step >= i + 1 ? 'active' : ''}`}>
                  <div className="step-number">{step > i + 1 ? <Check size={16} /> : i + 1}</div>
                  <span>{label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="booking-form-container glass-card-heavy reveal" style={{ padding: '48px', maxWidth: '900px', margin: '0 auto', borderRadius: '16px' }}>
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="form-step">
                  <h2 className="royal-heading" style={{ textAlign: 'center', marginBottom: '32px' }}>Select Your Room</h2>
                  <div className="room-selection-grid">
                    {rooms.map((room) => (
                      <div key={room.id} className={`room-select-card ${bookingData.roomType === room.category ? 'selected' : ''}`} onClick={() => setBookingData({ ...bookingData, roomType: room.category })}>
                        <img src={room.image} alt={room.category} loading="lazy" />
                        <div className="room-select-info">
                          <h3>{room.category}</h3>
                          <p className="room-select-price">{room.price}</p>
                          {bookingData.roomType === room.category && <div className="selected-check"><Check size={16} /> Selected</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="form-row" style={{ marginTop: '32px' }}>
                    <div className="form-group"><label><Calendar size={14} /> Check-In</label><input type="date" name="checkIn" value={bookingData.checkIn} onChange={handleInputChange} required /></div>
                    <div className="form-group"><label><Calendar size={14} /> Check-Out</label><input type="date" name="checkOut" value={bookingData.checkOut} onChange={handleInputChange} required /></div>
                    <div className="form-group"><label><Users size={14} /> Guests</label><input type="number" name="guests" value={bookingData.guests} onChange={handleInputChange} min="1" max="6" required /></div>
                  </div>
                  <button type="button" className="btn-gold" onClick={() => setStep(2)} disabled={!bookingData.roomType || !bookingData.checkIn || !bookingData.checkOut} style={{ width: '100%', marginTop: '16px' }}>Continue →</button>
                </div>
              )}
              {step === 2 && (
                <div className="form-step">
                  <h2 className="royal-heading" style={{ textAlign: 'center', marginBottom: '32px' }}>Guest Information</h2>
                  <div className="form-group"><label>Full Name *</label><input type="text" name="name" value={bookingData.name} onChange={handleInputChange} placeholder="Your full name" required /></div>
                  <div className="form-row">
                    <div className="form-group"><label>Phone *</label><input type="tel" name="phone" value={bookingData.phone} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" required /></div>
                    <div className="form-group"><label>Email *</label><input type="email" name="email" value={bookingData.email} onChange={handleInputChange} placeholder="you@email.com" required /></div>
                  </div>
                  <div className="form-group"><label>Special Requests</label><textarea name="specialRequests" value={bookingData.specialRequests} onChange={handleInputChange} placeholder="Any special requirements?" rows="4" /></div>
                  <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                    <button type="button" className="btn-outline" onClick={() => setStep(1)} style={{ flex: 1 }}>← Back</button>
                    <button type="button" className="btn-gold" onClick={() => setStep(3)} disabled={!bookingData.name || !bookingData.phone || !bookingData.email} style={{ flex: 2 }}>Continue →</button>
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="form-step">
                  <h2 className="royal-heading" style={{ textAlign: 'center', marginBottom: '32px' }}>Confirm Booking</h2>
                  <div className="booking-summary">
                    {[['Room', bookingData.roomType], ['Check-In', bookingData.checkIn], ['Check-Out', bookingData.checkOut], ['Guests', bookingData.guests], ['Name', bookingData.name], ['Phone', bookingData.phone], ['Email', bookingData.email]].map(([label, val]) => (
                      <div key={label} className="summary-row"><span>{label}</span><strong>{val}</strong></div>
                    ))}
                  </div>
                  <div className="payment-note" style={{ marginTop: '24px' }}><CreditCard size={20} style={{ color: 'var(--gold-500)' }} /><p>Payment gateway coming soon. Booking confirmed via phone/email.</p></div>
                  <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                    <button type="button" className="btn-outline" onClick={() => setStep(2)} style={{ flex: 1 }}>← Back</button>
                    <button type="submit" className="btn-gold" style={{ flex: 2 }}>Confirm Booking</button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BookingPage;
