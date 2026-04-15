import React, { useState } from 'react';
import { Lock, Eye, FileText, Image, Calendar, Settings } from 'lucide-react';
import '../styles/AdminPage.css';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('bookings');

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login - In production, this would be a real authentication
    if (credentials.username && credentials.password) {
      setIsLoggedIn(true);
      alert('Logged in successfully!');
    }
  };

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-page">
        <section className="admin-login-section">
          <div className="login-container">
            <div className="login-header">
              <Lock size={48} />
              <h1 className="royal-heading">Admin Login</h1>
              <p>Access the Royal Inn management portal</p>
            </div>

            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button type="submit" className="btn-gold login-btn">
                Login to Dashboard
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <section className="admin-dashboard">
        <div className="container-custom">
          <div className="dashboard-header">
            <h1 className="royal-heading">Admin Dashboard</h1>
            <button className="btn-secondary" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          </div>

          <div className="admin-tabs">
            <button 
              className={`admin-tab ${activeTab === 'bookings' ? 'active' : ''}`}
              onClick={() => setActiveTab('bookings')}
            >
              <Calendar size={20} />
              Bookings
            </button>
            <button 
              className={`admin-tab ${activeTab === 'content' ? 'active' : ''}`}
              onClick={() => setActiveTab('content')}
            >
              <FileText size={20} />
              Content
            </button>
            <button 
              className={`admin-tab ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              <Image size={20} />
              Gallery
            </button>
            <button 
              className={`admin-tab ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings size={20} />
              Settings
            </button>
          </div>

          <div className="admin-content">
            {activeTab === 'bookings' && (
              <div className="admin-section">
                <h2>Booking Requests</h2>
                <div className="admin-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Guest Name</th>
                        <th>Room Type</th>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" style={{ textAlign: 'center', padding: '40px' }}>
                          <Eye size={48} style={{ color: 'var(--gray-400)', marginBottom: '16px' }} />
                          <p>No booking requests yet. Bookings will appear here.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'content' && (
              <div className="admin-section">
                <h2>Manage Content</h2>
                <div className="content-actions">
                  <div className="action-card">
                    <h3>Add News/Updates</h3>
                    <p>Create blog posts and announcements</p>
                    <button className="btn-gold">Add New Post</button>
                  </div>
                  <div className="action-card">
                    <h3>Manage Menu</h3>
                    <p>Update food and drinks menu</p>
                    <button className="btn-gold">Edit Menu</button>
                  </div>
                  <div className="action-card">
                    <h3>Update Offers</h3>
                    <p>Add or modify special offers</p>
                    <button className="btn-gold">Manage Offers</button>
                  </div>
                  <div className="action-card">
                    <h3>Banner Management</h3>
                    <p>Upload and manage homepage banners</p>
                    <button className="btn-gold">Manage Banners</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'gallery' && (
              <div className="admin-section">
                <h2>Gallery Management</h2>
                <div className="gallery-upload">
                  <div className="upload-area">
                    <Image size={64} />
                    <h3>Upload Images</h3>
                    <p>Drag and drop images or click to browse</p>
                    <button className="btn-gold">Choose Files</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="admin-section">
                <h2>Settings</h2>
                <div className="settings-form">
                  <div className="form-group">
                    <label>Hotel Name</label>
                    <input type="text" defaultValue="Royal Inn" />
                  </div>
                  <div className="form-group">
                    <label>Contact Phone</label>
                    <input type="tel" defaultValue="+91 99225 51414" />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" defaultValue="info@royalinn.com" />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea rows="3" defaultValue="Pune-Nashik Highway, Opposite Highway Industries, Kurali, Maharashtra" />
                  </div>
                  <button className="btn-gold">Save Settings</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage;
