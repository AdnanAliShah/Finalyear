import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img from "../Images/2.jpg";
import img1 from "../Images/3.jpg";
import img2 from "../Images/6.webp";
import img3 from "../Images/boy.jpeg";
import img4 from "../Images/hsptl.jpeg";
import img5 from "../Images/0.jpeg";
import img6 from "../Images/dr1.jpg";
import img7 from "../Images/dr3.jpeg";
import imgf from '../Images/icon-facebook.webp';
import imgt from '../Images/icon-twitter.webp';
import imgi from '../Images/icon-instagram.jpeg';
import imgh from '../Images/photo.jpg';
import imgj from '../Images/New 2.png';
import imgk from '../Images/new.jpg'


const HomePage = () => {

  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="hero">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="hero-slider"
        >
          <SwiperSlide>
            <div className="hero-slide">
              <h2>Save Lives, Donate Blood</h2>
              <p>Your donation can make a difference!</p>
              <img src={imgh} alt="Donate Blood" />
              <div className="buttons">
                <a href="/donate" className="btn-primary">Donate Blood</a>
                <a href="/request" className="btn-secondary">Request Blood</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-slide">
              <h2>Become a Hero, Save a Life</h2>
              <p>Every drop counts. Register as a donor today.</p>
              <img src={imgj} alt="Register as Donor" />
              <div className="buttons">
                <a href="/" className="btn-primary">Register</a>
                <a href="/" className="btn-secondary">Learn More</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-slide">
              <h2>Request the blood in emergency situations</h2>
              <p>Ensuring blood is available when it’s needed the most.</p>
              <img src={imgk} alt="Track Inventory" />
              <div className="buttons">
                <a href="/donate" className="btn-primary">Track Now</a>
                <a href="/request" className="btn-secondary">View Inventory</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>


      {/* About Section */}
      <section className="about-section">
        <h3>How We Help</h3>
        <p>
          Our blood bank system helps manage blood donations, track inventory,
          and ensure quick and easy access to blood for those in need.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step">
            <img src={img} alt="Register as a Donor" />
            <h4>1. Register as a Donor</h4>
            <p>Sign up and provide your details to become a donor and save lives.</p>
          </div>
          <div className="step">
            <img src={img1} alt="Donate Blood" />
            <h4>2. Donate Blood</h4>
            <p>Visit one of our collection centers or wait for a scheduled drive.</p>
          </div>
          <div className="step">
            <img src={img2} alt="Track Inventory" />
            <h4>3. Track Inventory</h4>
            <p>Our system monitors blood stock, ensuring it's available when needed.</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <h3>Our Impact</h3>
        <div className="stats">
          <div className="stat-item">
            <img src={img3} alt="Donors Icon" />
            <h4>500+</h4>
            <p>Donors Registered</p>
          </div>
          <div className="stat-item">
            <img src={img} alt="Units Icon" />
            <h4>1000+</h4>
            <p>Units of Blood Distributed</p>
          </div>
          <div className="stat-item">
            <img src={img4} alt="Hospitals Icon" />
            <h4>300+</h4>
            <p>Hospitals Supported</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h3>What People Say</h3>
        <div className="testimonial-slider">
          <div className="testimonial">
            <img src={img5} alt="Sarah J." />
            <p>"Thanks to this system, I was able to quickly find a blood donor during an emergency. Truly life-saving!"</p>
            <h5>- Sarah J.</h5>
          </div>
          <div className="testimonial">
            <img src={img6} alt="John M." />
            <p>"As a regular donor, it's amazing to see how well-organized the donation process has become!"</p>
            <h5>- John M.</h5>
          </div>
          <div className="testimonial">
            <img src={img7} alt="Alex K." />
            <p>"I appreciate how easy it is to request blood for my loved ones. This system is a blessing."</p>
            <h5>- Alex K.</h5>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us">
        <h3>Contact Us</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={img} alt="Blood Bank Logo" />
            <p>&copy; 2024 Blood Bank Management System</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>123 Blood Drive St.</p>
            <p>City, State, Zip</p>
            <p>Email: info@bloodbank.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={imgf} alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src={imgt} alt="Twitter" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={imgi} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default HomePage;
