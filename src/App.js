import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* Include the Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <main>
        <h1>Welcome to the Newspaper and Article Cloud</h1>
        <p>This is a platform for storing and accessing newspapers, articles, and documents.</p>
      </main>
    </div>
  );
}

export default App;
