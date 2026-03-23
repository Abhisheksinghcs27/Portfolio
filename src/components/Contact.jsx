import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <p>CONTACT</p>
      <h1>Get in Touch with Me</h1>
      <div className="contact-content">
        <div className="contact-info slide-in-left">
          <p>I'm always open to discuss exciting projects and new opportunities. Let's collaborate!</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>singh.abhishek.cs27@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+91 7566902081</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Bhopal, Madhya Pradesh, India</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://github.com/Abhisheksinghcs27" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/explore-abhishek-singh/" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://wa.me/+917566902081" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="contact-form slide-in-right">
          <form id="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required name="user_name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required name="user_email" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-send">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
