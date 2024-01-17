// CustomNavbar.jsx

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  const scrollToSponsors = () => {
    const sponsorsSection = document.getElementById('sponsors');
    if (sponsorsSection) {
      sponsorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Navbar.Brand href="/">
        <img
          src="logo.png" // Replace with the path to your logo image
          alt="Logo"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
          <Nav.Link onClick={scrollToSponsors}>Our Sponsors</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
