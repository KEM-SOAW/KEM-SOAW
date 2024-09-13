// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import './NavBar.css'; // Ensure your CSS is imported

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = async () => {
    await signOut(auth);
    window.location.reload(); // Redirects after sign out
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">SOAW</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><button onClick={handleLogOut}>Log Off</button></li>
      </ul>
      <div className={`burger ${isOpen ? "toggle" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;
