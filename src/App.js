// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AfterLogin from './components/AfterLogin';
import Korant from './components/Korant';  // Your other components
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Monitor authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Stop loading once we know the user's status
    });

    return () => unsubscribe(); // Clean up the listener
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading while checking auth status
  }

  return (
    <Router>
      <div>
        <Routes>
          {/* Redirect to AfterLogin if logged in, else show Login */}
          <Route
            path="/login"
            element={user ? <Navigate to="/afterlogin" /> : <Login />}
          />

          {/* Protect AfterLogin and other routes */}
          <Route
            path="/afterlogin"
            element={user ? <AfterLogin /> : <Navigate to="/login" />}
          />
          <Route
            path="/korant"
            element={user ? <Korant /> : <Navigate to="/login" />}
          />

          {/* Default route redirects to AfterLogin if logged in */}
          <Route path="/" element={<Navigate to="/afterlogin" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
