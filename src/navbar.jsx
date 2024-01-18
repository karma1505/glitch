import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faHandshake, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="floating-icons">
      <div onClick={() => scrollToSection('home')}><FontAwesomeIcon icon={faHome} /></div>
      <div onClick={() => scrollToSection('about')}><FontAwesomeIcon icon={faInfo} /></div>
      <div onClick={() => scrollToSection('sponsors')}><FontAwesomeIcon icon={faHandshake} /></div>
      <div onClick={() => scrollToSection('contact')}><FontAwesomeIcon icon={faEnvelope} /></div>
    </div>
  );
};

export default CustomNavbar;
