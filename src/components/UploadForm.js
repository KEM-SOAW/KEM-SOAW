// UploadForm.js
import React from 'react';
import './UploadForm.css';

const UploadForm = () => {
  return (
    <form className="upload-form">
      <input type="file" />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
