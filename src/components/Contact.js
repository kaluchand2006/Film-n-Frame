import React from "react";
import "../styles/Contact.css"; // optional

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="mb-4">
          Ready to capture your moments? Get in touch with us today.
        </p>
        
        <div className="grid grid-2">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <strong>Email:</strong>
              <p>Flimsnframe@gmail.com</p>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <p>+977 9812785134</p>
            </div>
            <div className="contact-item">
              <strong>Location:</strong>
              <p>Mumbai, India</p>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="cta-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
