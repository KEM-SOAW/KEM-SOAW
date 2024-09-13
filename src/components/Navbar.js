import React from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const handleLogout = () => {
    signOut(auth).then(() => {
      alert('Logged out');
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>SOAW Cloud</h1>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/upload">Upload</a></li>
        <li><a href="/about">About</a></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
