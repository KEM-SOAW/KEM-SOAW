// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AfterLogin from './components/AfterLogin';
import Korant from './components/Korant';
import Docs from './components/Docs';
import Calendar from './components/Calendar';
import Notes from './components/Notes';
import FollowUp from './components/FollowUp';

function App() {
  return (
    <Router>
      <div>
        <h1>SOAW Cloud</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/after-login" element={<AfterLogin />} />
          <Route path="/korant" element={<Korant />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/follow-up" element={<FollowUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
