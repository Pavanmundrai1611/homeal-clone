import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div>
          <h2 className="contact-heading">Contact Us</h2>
          <p className="contact-detail">Email: <a href="mailto:homeal@localzi.com">homeal@localzi.com</a></p>
          <p className="contact-detail">Phone: <a href="tel:+91 9739813749">+91 9739813749</a></p>
        </div>
        <div className="map-container">
          <iframe
            title="Homeal Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.976468790068!2d77.61845895541991!3d12.956225000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1554bf33f3a5%3A0x7fea015764dbc5ea!2sHomeal%20Localzi!5e0!3m2!1sen!2sin!4v1708101978366!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
        </div>
      </div>
      <div className="message-box">
        <h2 className="message-heading">Send Us a Message</h2>
        <form>
          <label className="message-label" htmlFor="name">Name:</label>
          <input className="message-input" type="text" id="name" name="name" required />
          <label className="message-label" htmlFor="email">Email:</label>
          <input className="message-input" type="email" id="email" name="email" required />
          <label className="message-label" htmlFor="message">Message:</label>
          <textarea className="message-textarea" id="message" name="message" required></textarea>
          <button className="message-button" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
