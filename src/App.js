// App.js
import React from 'react';
import Navbar from './components/Navbar';
import ImageGrid from './components/ImageGrid';
import UploadForm from './components/UploadForm';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <UploadForm />
      <ImageGrid />
    </div>
  );
};

export default App;
