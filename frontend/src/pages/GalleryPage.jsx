import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/mock';
import '../styles/GalleryPage.css';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['all', 'rooms', 'food', 'bar', 'property'];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h1 className="royal-heading">Gallery</h1>
          <p>Explore the Royal Inn Experience</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container-custom">
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="gallery-item"
                onClick={() => setLightboxImage(image)}
              >
                <img src={image.url} alt={image.title} />
                <div className="gallery-item-overlay">
                  <span>{image.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <button className="lightbox-close">
            <X size={32} />
          </button>
          <img src={lightboxImage.url} alt={lightboxImage.title} />
          <div className="lightbox-caption">{lightboxImage.title}</div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
