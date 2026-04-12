import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/mock';
import { initScrollReveal } from '../hooks/useAnimations';
import '../styles/GalleryPage.css';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => { const t = setTimeout(() => initScrollReveal(), 100); return () => clearTimeout(t); }, []);

  const categories = ['all', 'rooms', 'food', 'bar', 'property'];
  const filteredImages = selectedCategory === 'all' ? galleryImages : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1 className="royal-heading">Gallery</h1>
          <p>Explore the Royal Inn experience</p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="gallery-filters reveal">
            {categories.map((cat) => (
              <button key={cat} className={`gallery-filter ${selectedCategory === cat ? 'active' : ''}`} onClick={() => setSelectedCategory(cat)}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="gallery-grid stagger-children">
            {filteredImages.map((image) => (
              <div key={image.id} className="gallery-item" onClick={() => setLightboxImage(image)}>
                <img src={image.url} alt={image.title} loading="lazy" />
                <div className="gallery-item__overlay"><span>{image.title}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <button className="lightbox__close"><X size={28} /></button>
          <img src={lightboxImage.url} alt={lightboxImage.title} />
          <div className="lightbox__caption">{lightboxImage.title}</div>
        </div>
      )}
    </div>
  );
};
export default GalleryPage;
