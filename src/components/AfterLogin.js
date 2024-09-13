// AfterLogin.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AfterLogin.css';  // Make sure this CSS file is linked

function AfterLogin() {
  return (
    <div className="after-login-container">
      <h1>SOAW</h1>
      <h2>Welcome to the SOAW</h2>
      <ul className="section-list">
        <li>
          <Link to="/korant" className="section-link">KORANT</Link>
        </li>
        <li>
          <Link to="/docs" className="section-link">DOCS</Link>
        </li>
        <li>
          <Link to="/calendar" className="section-link">CALENDAR</Link>
        </li>
        <li>
          <Link to="/notes" className="section-link">NOTES</Link>
        </li>
        <li>
          <Link to="/followup" className="section-link">FOLLOW UP</Link>
        </li>
      </ul>
    </div>
  );
}

export default AfterLogin;
