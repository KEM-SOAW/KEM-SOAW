import React from 'react';
import Navbar from './components/Navbar';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to the Newspaper and Article Cloud</h1>
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
