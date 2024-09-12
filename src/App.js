import React from 'react';
import Navbar from './components/Navbar';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to the Newspaper and Article Cloud</h1>
      <UploadForm />
    </div>
  );
}

export default App;
