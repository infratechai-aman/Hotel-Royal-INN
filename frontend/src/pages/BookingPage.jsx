import React, { useState } from 'react';
import { Calendar, Users, CreditCard, Check } from 'lucide-react';
import { rooms } from '../data/mock';
import '../styles/BookingPage.css';

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    name: '',
    phone: '',
    email: '',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking confirmed! You will receive a confirmation email shortly.');
    console.log('Final booking data:', bookingData);
  };

  return (
    <div className="booking-page">
      <section className="booking-hero">
        <div className="booking-hero-overlay"></div>
        <div className="booking-hero-content">
          <h1 className="royal-heading">Book Your Stay</h1>
          <p>Complete your reservation in 3 easy steps</p>
        </div>
      </section>

      <section className="booking-section">
        <div className="container-custom">
          <div className="booking-steps">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <span>Select Room</span>
            </div>
            <div className="step-line"></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <span>Guest Details</span>
            </div>
            <div className="step-line"></div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <span>Confirm & Pay</span>
            </div>
          </div>

          <div className="booking-form-container">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Room Selection */}
              {step === 1 && (
                <div className="form-step">
                  <h2 className="royal-heading">Select Your Room</h2>
                  <div className="room-selection-grid">
                    {rooms.map((room) => (
                      <div 
                        key={room.id} 
                        className={`room-selection-card ${bookingData.roomType === room.category ? 'selected' : ''}`}
                        onClick={() => setBookingData({ ...bookingData, roomType: room.category })}
                      >
                        <img src={room.image} alt={room.category} />
                        <div className="room-selection-details">
                          <h3>{room.category}</h3>
                          <p className="room-price">{room.price}</p>
                          <p>{room.description}</p>
                          {bookingData.roomType === room.category && (
                            <div className="selected-badge">
                              <Check size={20} />
                              Selected
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="date-selection">
                    <div className="form-group">
                      <label htmlFor="checkIn">
                        <Calendar size={18} />
                        Check-In Date
                      </label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={bookingData.checkIn}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="checkOut">
                        <Calendar size={18} />
                        Check-Out Date
                      </label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={bookingData.checkOut}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="guests">
                        <Users size={18} />
                        Number of Guests
                      </label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        value={bookingData.guests}
                        onChange={handleInputChange}
                        min="1"
                        max="6"
                        required
                      />
                    </div>
                  </div>

                  <button 
                    type="button" 
                    className="btn-gold next-btn"
                    onClick={handleNextStep}
                    disabled={!bookingData.roomType || !bookingData.checkIn || !bookingData.checkOut}
                  >
                    Continue to Guest Details
                  </button>
                </div>
              )}

              {/* Step 2: Guest Details */}
              {step === 2 && (
                <div className="form-step">
                  <h2 className="royal-heading">Guest Information</h2>
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={bookingData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="specialRequests">Special Requests (Optional)</label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={bookingData.specialRequests}
                      onChange={handleInputChange}
                      placeholder="Any special requirements or requests?"
                      rows="4"
                    />
                  </div>

                  <div className="button-group">
                    <button type="button" className="btn-secondary" onClick={handlePrevStep}>
                      Back
                    </button>
                    <button 
                      type="button" 
                      className="btn-gold"
                      onClick={handleNextStep}
                      disabled={!bookingData.name || !bookingData.phone || !bookingData.email}
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation & Payment */}
              {step === 3 && (
                <div className="form-step">
                  <h2 className="royal-heading">Confirm Your Booking</h2>
                  
                  <div className="booking-summary">
                    <h3>Booking Summary</h3>
                    <div className="summary-item">
                      <span>Room Type:</span>
                      <strong>{bookingData.roomType}</strong>
                    </div>
                    <div className="summary-item">
                      <span>Check-In:</span>
                      <strong>{bookingData.checkIn}</strong>
                    </div>
                    <div className="summary-item">
                      <span>Check-Out:</span>
                      <strong>{bookingData.checkOut}</strong>
                    </div>
                    <div className="summary-item">
                      <span>Guests:</span>
                      <strong>{bookingData.guests}</strong>
                    </div>
                    <div className="summary-item">
                      <span>Guest Name:</span>
                      <strong>{bookingData.name}</strong>
                    </div>
                    <div className="summary-item">
                      <span>Phone:</span>
                      <strong>{bookingData.phone}</strong>
                    </div>
                    <div className="summary-item">
                      <span>Email:</span>
                      <strong>{bookingData.email}</strong>
                    </div>
                  </div>

                  <div className="payment-section">
                    <h3>
                      <CreditCard size={24} />
                      Payment Method
                    </h3>
                    <p className="payment-note">
                      Payment gateway integration coming soon. Your booking request will be confirmed via phone/email.
                    </p>
                  </div>

                  <div className="button-group">
                    <button type="button" className="btn-secondary" onClick={handlePrevStep}>
                      Back
                    </button>
                    <button type="submit" className="btn-gold">
                      Confirm Booking
                    </button>
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
