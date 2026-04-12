import React, { useEffect } from 'react'; import { MapPin, Navigation, Phone, Car } from 'lucide-react'; import { contactInfo, nearbyPlaces } from '../data/mock'; import { initScrollReveal } from '../hooks/useAnimations'; import '../styles/LocationPage.css';
const LocationPage = () => {
  useEffect(() => { const t = setTimeout(() => initScrollReveal(), 100); return () => clearTimeout(t); }, []);
  const openInGoogleMaps = () => window.open('https://www.google.com/maps/search/Pune-Nashik+Highway+Kurali', '_blank');
  return (
    <div className="location-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content"><h1 className="royal-heading">Location & Directions</h1><p>Find us on the Pune-Nashik Highway</p></div>
      </section>
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="map-wrapper reveal">
            <iframe title="Royal Inn Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.123456789012!2d73.123456!3d19.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI0LjQiTiA3M8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" width="100%" height="500" style={{ border: 0, borderRadius: '16px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <button className="map-btn btn-gold" onClick={openInGoogleMaps}><Navigation size={16} /> Open in Google Maps</button>
          </div>
        </div>
      </section>
      <section style={{ padding: 'var(--section-padding) 0', background: 'rgba(0,0,0,0.15)' }}>
        <div className="container-custom">
          <div className="bento stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {[
              { icon: <MapPin size={24} />, title: 'Our Address', content: contactInfo.address },
              { icon: <Phone size={24} />, title: 'Contact', content: `Reception: ${contactInfo.phone}\nRestaurant: ${contactInfo.restaurantPhone}` },
              { icon: <Car size={24} />, title: 'Easy Access', content: 'Located on main highway\nAmple free parking' }
            ].map((item, i) => (
              <div key={i} className="bento__card--compact" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '32px' }}>
                <div className="bento__icon-row" style={{ marginBottom: '16px' }}>
                  {item.icon}
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: 'var(--gold-100)', margin: 0 }}>{item.title}</h3>
                </div>
                <div style={{ paddingLeft: '42px', width: '100%' }}>
                  <p style={{ whiteSpace: 'pre-line', fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="section-header reveal"><h2 className="royal-heading">Driving Directions</h2><p className="section-subtitle">Easy to find, easy to reach</p></div>
          <div className="directions-grid stagger-children">
            {[
              { from: 'From Pune', dist: '~85 km', steps: ['Take NH 60 towards Nashik', 'Continue on Pune-Nashik Highway', 'Pass through Chakan and Alephata', 'Royal Inn at Kurali on your left'], time: '~1.5 hours' },
              { from: 'From Nashik', dist: '~35 km', steps: ['Take NH 60 towards Pune', 'Continue on Pune-Nashik Highway', 'Pass through Sangamner', 'Royal Inn at Kurali on your right'], time: '~45 minutes' }
            ].map((dir, i) => (
              <div key={i} className="direction-card glass-card" style={{ padding: '36px' }}>
                <div className="direction-header"><h3>{dir.from}</h3><span className="direction-dist">{dir.dist}</span></div>
                <ol className="direction-steps">{dir.steps.map((s, j) => <li key={j}>{s}</li>)}</ol>
                <p className="direction-time">Travel time: {dir.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: 'var(--section-padding) 0', background: 'rgba(0,0,0,0.15)' }}>
        <div className="container-custom">
          <div className="section-header reveal"><h2 className="royal-heading">Nearby Landmarks</h2><p className="section-subtitle">Points of interest</p></div>
          <div className="nearby-grid stagger-children">
            {nearbyPlaces.map((place, index) => (
              <div key={index} className="nearby-item glass-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <MapPin size={20} style={{ color: 'var(--gold-500)', flexShrink: 0 }} />
                <div><h4 style={{ fontSize: '0.95rem', color: 'var(--gold-200)', marginBottom: '2px' }}>{place.name}</h4><span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{place.distance}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default LocationPage;
