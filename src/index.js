// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';  // Ensure this path is correct
import App from './App';  // Ensure this path is correct

// Use ReactDOM.createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
