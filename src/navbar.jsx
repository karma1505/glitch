import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

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
          <Nav.Link onClick={scrollToHome} className="nav-link">Home</Nav.Link><br />
          <Nav.Link href="#about" className="nav-link">About Us</Nav.Link><br />
          <Nav.Link onClick={scrollToSponsors} className="nav-link">Our Sponsors</Nav.Link><br />
          <Nav.Link href="#contact" className="nav-link">Contact Us</Nav.Link><br />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
