import React from 'react';
import './App.css';

const Contact = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-content">
        <h2>Contact Us</h2>
        <h5>If you have any questions or feedback, feel free to reach out!</h5>
      </div>
      <div className="contact-names">
        <div className="contact-name">
          <h5>Vikas Chouhan</h5>
          <h6>+91 7357303139</h6>
        </div>
        <div className="contact-name">
          <h5>Khushi Pandey</h5>
          <h6>+91 56556548462</h6>
        </div>
        <div className="contact-name">
          <h5>Karmanya Singh</h5>
          <h6>+91 9999098900</h6>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
