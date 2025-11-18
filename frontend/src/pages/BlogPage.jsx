import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../data/mock';
import '../styles/BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <h1 className="royal-heading">News & Updates</h1>
          <p>Stay updated with latest events and announcements</p>
        </div>
      </section>

      <section className="blog-section">
        <div className="container-custom">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">
                    <Tag size={14} />
                    {post.category}
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <button className="read-more-btn">Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container-custom">
          <div className="newsletter-box">
            <h2 className="royal-heading">Subscribe to Our Newsletter</h2>
            <p>Get the latest updates on events, offers, and news delivered to your inbox</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn-gold">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
