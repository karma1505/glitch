import React, { useState } from 'react';
import './App.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setSubCategory('');
  };

  const handleRegistration = () => {
    console.log('Registration details:', {
      fullName,
      email,
      contact,
      category,
      subCategory,
    });
  };

  return (
    <div className="register-container" style={{ backgroundColor: '#000000' }}>
      <h2>Registration Form</h2>
      <div className='name'>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category" value={category} onChange={handleCategoryChange} required>
          <option value="">Select Category</option>
          <option value="Visitor">Visitor</option>
          <option value="Participant">Participant</option>
          <option value="Official">Official</option>
        </select>
      </div>
      {category === 'Participant' && (
        <div>
          <label htmlFor="subCategory">Event to Register In</label>
          <select
            id="subCategory"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            required
          >
            <option value="">Select Event</option>
            <option value="RoboWars">RoboWars</option>
            <option value="MicroMouseMaze">MicroMouseMaze</option>
            <option value="CTF">CTF</option>
            <option value="ESports">ESports</option>
          </select>
        </div>
      )}
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default Register;
