import React, { useState } from 'react';
import imgf from '../Images/icon-facebook.webp';
import imgt from '../Images/icon-twitter.webp';
import imgi from '../Images/icon-instagram.jpeg';


const DonatePage = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    bloodType: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/donate/send-donation-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="donate-page">
      <h1>Donate Blood</h1>
      <div className="donate-container">
        {!submitted ? (
          <form id="donate" onSubmit={handleSubmit}>
            <p>Your donation can save lives. Register below to become a donor.</p>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Blood Type:</label>
              <select
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        ) : (
          <div className="thank-you">
            <h1>Thank You</h1>
            <p>
              You are registered with the blood bank system. You will be contacted when there is a need for your blood group.
            </p>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <footer>
      <div className="footer-container">
    <div className="footer-about">
      <h4>About Us</h4>
      <p>
        Blood Bank Management System is dedicated to connecting blood donors with those in need. Your donation can make a real difference.
      </p>
    </div>
    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/donate">Donate Blood</a></li>
        <li><a href="/request">Request Blood</a></li>
      </ul>
    </div>
    <div className="footer-contact">
      <h4>Contact Info</h4>
      <p>Email: support@bloodbank.org</p>
      <p>Phone: +1 (555) 123-4567</p>
      <p>Address: 123 Blood Drive, Heartsville, HT 12345</p>
    </div>
    <div className="footer-social">
      <h4>Follow Us</h4>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon facebook">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon twitter">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon instagram">Instagram</a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Blood Bank Management System. All rights reserved.</p>
  </div>
      </footer>
    </div>
  );
};

export default DonatePage;
