import React, { useState } from 'react';
import { storage } from '../firebaseConfig'; // Import the storage instance
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('');

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // You can track the progress here if needed
      },
      (error) => {
        setError('Upload failed: ' + error.message);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setUrl(downloadURL);
        console.log('File available at', downloadURL);
      }
    );
  };

  return (
    <div>
      <form>
        <input type="file" onChange={handleChange} />
        <button type="button" onClick={handleUpload}>
          Upload
        </button>
      </form>
      {error && <div>{error}</div>}
      {url && <div>Uploaded Image: <img src={url} alt="Uploaded file" /></div>}
    </div>
  );
};

export default UploadForm;
