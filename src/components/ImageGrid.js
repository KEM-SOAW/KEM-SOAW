// ImageGrid.js
import React from 'react';
import './ImageGrid.css';

const ImageGrid = () => {
  // Temporary array of image URLs
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <div className="image-grid">
      {images.map((url, index) => (
        <div key={index} className="image-item">
          <img src={url} alt="Document" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
