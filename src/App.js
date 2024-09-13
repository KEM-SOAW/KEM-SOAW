// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AfterLogin from './components/AfterLogin';  // Ensure this component is created
import Korant from './components/Korant';  // Your other components

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/afterlogin" element={<AfterLogin />} />
          <Route path="/korant" element={<Korant />} />
          <Route path="/" element={<Navigate to="/afterlogin" />} /> {/* Redirect root to AfterLogin */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
