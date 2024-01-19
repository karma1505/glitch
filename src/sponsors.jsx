import React from 'react';
import './App.css';

const Sponsors = () => {
  return (
    <div id="sponsors" className="sponsors-container">
      <h1>Our Sponsors</h1>

      <div className="sponsors-content">
        <div>
          <h2>Title Sponsor</h2>
          <img src="insert.png" alt="Silver Sponsor 1" />
          <p>Insert Text</p>

          <h2>Associate Title Sponsor</h2>
          <img src="sponsorat.jpg" alt="Silver Sponsor 2" />
          <p>PetraShell Inc.</p>
        </div>

        <div>
          <h2>Competition Sponsor</h2>
          <img src="insert.png" alt="Gold Sponsor 1" />
          <img src="insert.png" alt="Gold Sponsor 2" />
        </div>

        <div>
          <h2>Powered By</h2>
          <img src="insert.png" alt="Platinum Sponsor 1" />
          <img src="insert.png" alt="Platinum Sponsor 2" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
