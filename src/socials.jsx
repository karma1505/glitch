import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const CustomSocials = () => {
  const openInstagram = () => {
    window.open('https://www.instagram.com/glitch.shoolini/', '_blank');
  };

  const openTwitter = () => {
    window.open('https://twitter.com/glitchshoolini', '_blank');
  };

  return (
    <div className="floating-icons-right">
      <div onClick={openInstagram}>
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div onClick={openTwitter}>
        <FontAwesomeIcon icon={faXTwitter} />
      </div>
    </div>
  );
};

export default CustomSocials;
