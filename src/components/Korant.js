// Korant.js
import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { storage, db } from '../firebaseConfig';
import { ref, getDownloadURL } from 'firebase/storage';
import './Korant.css';  // Add styling here

function Korant() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [filter, setFilter] = useState({ year: '', month: '', date: '' });

  useEffect(() => {
    const fetchImages = async () => {
      const q = query(collection(db, 'newspaper_images'), orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);

      const imageList = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        imageList.push({
          id: doc.id,
          url: data.url,
          date: data.date,
        });
      });

      setImages(imageList);
      setFilteredImages(imageList); // Initially show all images
    };

    fetchImages();
  }, []);

  // Filter handler
  const handleFilter = () => {
    const { year, month, date } = filter;
    const filtered = images.filter(image => {
      const imageDate = new Date(image.date);
      const matchesYear = year ? imageDate.getFullYear() === parseInt(year) : true;
      const matchesMonth = month ? imageDate.getMonth() + 1 === parseInt(month) : true;
      const matchesDate = date ? imageDate.getDate() === parseInt(date) : true;
      return matchesYear && matchesMonth && matchesDate;
    });
    setFilteredImages(filtered);
  };

  // JSX for the component
  return (
    <div className="korant-container">
      <h1>Newspaper Archive</h1>

      <div className="filter-section">
        <label>Year:</label>
        <input 
          type="number" 
          placeholder="YYYY" 
          value={filter.year} 
          onChange={(e) => setFilter({ ...filter, year: e.target.value })} 
        />
        <label>Month:</label>
        <input 
          type="number" 
          placeholder="MM" 
          value={filter.month} 
          onChange={(e) => setFilter({ ...filter, month: e.target.value })} 
        />
        <label>Date:</label>
        <input 
          type="number" 
          placeholder="DD" 
          value={filter.date} 
          onChange={(e) => setFilter({ ...filter, date: e.target.value })} 
        />
        <button onClick={handleFilter}>Filter</button>
      </div>

      <div className="image-list">
        {filteredImages.map((image) => (
          <div key={image.id} className="image-item">
            <p>{new Date(image.date).toDateString()}</p>
            <img src={image.url} alt="Newspaper" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Korant;
