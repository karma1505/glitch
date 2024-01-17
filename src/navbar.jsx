import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faInfo, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faHome, faInfo, faUsers, faEnvelope);

const CustomNavbar = () => {
  const scrollToSponsors = () => {
    const sponsorsSection = document.getElementById('sponsors');
    if (sponsorsSection) {
      sponsorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const documentHeight = document.documentElement.scrollHeight;
  
    window.scrollTo({
      top: documentHeight,
      behavior: 'smooth',
    });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Navbar.Brand href="/" className="navbar-brand">
        <img
          src="glitch.jpeg"
          alt="Logo"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column ml-auto">
          <Nav.Link onClick={scrollToHome} className="nav-link">
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '30px', marginRight: '8px' }} />
            Home
          </Nav.Link>
          < br />
          <Nav.Link onClick={scrollToAbout} className="nav-link">
            <FontAwesomeIcon icon={faInfo} style={{ fontSize: '30px', marginRight: '8px' }} />
            About Us
          </Nav.Link>
          < br />
          <Nav.Link onClick={scrollToSponsors} className="nav-link">
            <FontAwesomeIcon icon={faUsers} style={{ fontSize: '30px', marginRight: '8px' }} />
            Our Sponsors
          </Nav.Link>
          < br />
          <Nav.Link onClick={scrollToContact} className="nav-link">
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '30px', marginRight: '8px' }} />
            Contact Us
          </Nav.Link>
          < br />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
