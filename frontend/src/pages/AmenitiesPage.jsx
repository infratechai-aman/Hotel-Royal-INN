import React, { useEffect } from 'react';
import { Clock, Car, Shield, Users, Wifi, Droplet } from 'lucide-react';
import { amenities } from '../data/mock';
import { initScrollReveal } from '../hooks/useAnimations';
import '../styles/AmenitiesPage.css';

const AmenitiesPage = () => {
  useEffect(() => { const t = setTimeout(() => initScrollReveal(), 100); return () => clearTimeout(t); }, []);

  return (
    <div className="amenities-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1 className="royal-heading">Premium Amenities</h1>
          <p>Comfort and convenience at every step</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="section-header reveal">
            <h2 className="royal-heading">Our Facilities</h2>
            <p className="section-subtitle">Everything you need for a comfortable stay</p>
          </div>
          <div className="bento stagger-children">
            {/* Front Desk & Parking — Compact */}
            <div className="bento__card bento__card--compact">
              <div className="bento__icon-row">
                <Clock size={22} />
                <div>
                  <h4>24/7 Front Desk</h4>
                  <p>Round-the-clock concierge service</p>
                </div>
              </div>
            </div>

            <div className="bento__card bento__card--compact">
              <div className="bento__icon-row">
                <Car size={22} />
                <div>
                  <h4>Free Parking</h4>
                  <p>Secure, ample parking space</p>
                </div>
              </div>
            </div>

            {/* Medium — Room Service Image Card */}
            <div className="bento__card bento__card--medium bento__card--image">
              <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80" alt="Room Service" loading="lazy" />
              <div className="bento__card-overlay">
                <span className="bento__card-tag">Service</span>
                <h3>In-Room Dining</h3>
                <p>Gourmet meals delivered to your door</p>
              </div>
            </div>

            {/* Tall — Swimming Pool / Spa (Mock) Image Card */}
            <div className="bento__card bento__card--tall bento__card--image">
              <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" alt="Resort Amenities" loading="lazy" />
              <div className="bento__card-overlay">
                <span className="bento__card-tag">Leisure</span>
                <h3>Premium Leisure</h3>
                <p>Relax and unwind with our world-class facilities and serene environment</p>
              </div>
            </div>

            {/* Compact Icons */}
            <div className="bento__card bento__card--compact">
              <div className="bento__icon-row">
                <Shield size={22} />
                <div>
                  <h4>CCTV & Security</h4>
                  <p>24/7 surveillance & safety</p>
                </div>
              </div>
            </div>

            <div className="bento__card bento__card--compact">
              <div className="bento__icon-row">
                <Users size={22} />
                <div>
                  <h4>Family Friendly</h4>
                  <p>Comfortable for all ages</p>
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

            <div className="bento__card bento__card--compact">
              <div className="bento__icon-row">
                <Droplet size={22} />
                <div>
                  <h4>Hot Water 24/7</h4>
                  <p>All-day comfort guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0', background: 'rgba(0,0,0,0.15)' }}>
        <div className="container-custom">
          <div className="features-list">
            {[
              { img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', title: 'Highway Convenience', desc: 'Strategically located on the Pune-Nashik Highway at Kurali, Royal Inn offers the perfect stop for travelers. Easy access, ample parking, and round-the-clock service.' },
              { img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800', title: 'Safety & Security', desc: 'Your safety is our priority. With 24/7 CCTV surveillance, trained security personnel, and well-lit premises, we ensure complete peace of mind.' },
              { img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', title: 'Family Friendly', desc: 'We welcome families with open arms. Our spacious family suites, child-friendly facilities, and dedicated staff ensure a comfortable stay for all ages.' }
            ].map((feature, i) => (
              <div key={i} className={`feature-row ${i % 2 === 1 ? 'reverse' : ''} reveal`}>
                <div className="feature-image" style={{ backgroundImage: `url('${feature.img}')` }}></div>
                <div className="feature-content">
                  <h2 className="royal-heading">{feature.title}</h2>
                  <div className="gold-line-left"></div>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default AmenitiesPage;
