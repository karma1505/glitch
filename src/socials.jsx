import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const CustomSocials = () => {
  const openInstagram = () => {
    window.open('https://www.instagram.com/shooliniuniversity/', '_blank');
  };

  const openTwitter = () => {
    window.open('https://twitter.com/ShooliniUniv', '_blank');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/ShooliniUniversityOfficial/', '_blank')
  }
 
  return (
    <div className="floating-icons-right">
      <div onClick={openInstagram}>
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div onClick={openTwitter}>
        <FontAwesomeIcon icon={faXTwitter} />
      </div>
      <div onClick={openFacebook}>
        <FontAwesomeIcon icon={faFacebook} />
      </div>
    </div>
  );
};

export default CustomSocials;
