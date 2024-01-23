import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faHandshake, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Use free-brands-svg-icons for social media icons

const CustomNavbar = () => {
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSponsors = () => {
    const sponsorSection = document.getElementById('sponsors');
    if (sponsorSection) {
      sponsorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      if (contactSection === 'contact') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } else {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="floating-icons">
      <div onClick={() => scrollToHome()}><FontAwesomeIcon icon={faHome} /></div>
      <div onClick={() => scrollToAbout()}><FontAwesomeIcon icon={faUsers} /></div>
      <div onClick={() => scrollToSponsors()}><FontAwesomeIcon icon={faHandshake} /></div>
      <div onClick={() => scrollToContact()}><FontAwesomeIcon icon={faEnvelope} /></div>
    <div className="social-icons">
      <a href="https://www.instagram.com/glitch.shoolini/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://twitter.com/glitchshoolini" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
    </div>
  );
};

export default CustomNavbar;
