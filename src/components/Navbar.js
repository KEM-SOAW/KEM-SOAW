import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/newspapers">Newspapers</a></li>
        <li><a href="/articles">Articles</a></li>
        <li><a href="/documents">Documents</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
