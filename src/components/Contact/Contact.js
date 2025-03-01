import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
  
        <div className="contact-item">
          <FaEnvelope className="contact-icon email-icon" />
          <span className="contact-text">sobetwogroup@gmail.com</span>
        </div>

        <div className="contact-item">
          <FaPhone className="contact-icon phone-icon" />
          <span className="contact-text">+27 83 496 4104</span>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon location-icon" />
          <span className="contact-text">130 South Street, Die Hoewes, Centurion</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
