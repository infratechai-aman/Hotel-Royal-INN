import React, { useEffect } from 'react'; import { Calendar, Tag } from 'lucide-react'; import { blogPosts } from '../data/mock'; import { initScrollReveal } from '../hooks/useAnimations'; import '../styles/BlogPage.css';
const BlogPage = () => {
  useEffect(() => { const t = setTimeout(() => initScrollReveal(), 100); return () => clearTimeout(t); }, []);
  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1920')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content"><h1 className="royal-heading">News & Updates</h1><p>Stay updated with latest events and announcements</p></div>
      </section>
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="blog-grid stagger-children">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card glass-card" style={{ overflow: 'hidden' }}>
                <div className="blog-card__image"><img src={post.image} alt={post.title} loading="lazy" /><div className="blog-card__category"><Tag size={12} /> {post.category}</div></div>
                <div className="blog-card__content">
                  <div className="blog-card__meta"><Calendar size={14} /><span>{post.date}</span></div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <button className="blog-card__link">Read More →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: 'var(--section-padding) 0' }}>
        <div className="container-custom">
          <div className="newsletter-box glass-card-heavy reveal" style={{ padding: '60px', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <h2 className="royal-heading" style={{ marginBottom: '12px' }}>Subscribe to Our Newsletter</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Get the latest updates on events, offers, and news</p>
            <form className="newsletter-form" style={{ display: 'flex', gap: '12px', maxWidth: '500px', margin: '0 auto' }}>
              <div className="form-group" style={{ margin: 0, flex: 1 }}>
                <input type="email" placeholder="Enter your email address" required />
              </div>
              <button type="submit" className="btn-gold">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogPage;
