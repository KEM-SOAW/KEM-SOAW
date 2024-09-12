import React, { useState } from 'react';
import { storage, db } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

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
        // Optional: Track upload progress here
      },
      (error) => {
        setError('Upload failed: ' + error.message);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setUrl(downloadURL);

        // Store image metadata in Firestore
        try {
          const docRef = await addDoc(collection(db, 'images'), {
            url: downloadURL,
            createdAt: Timestamp.now(),
          });
          console.log('Image metadata stored with ID: ', docRef.id);
        } catch (e) {
          console.error('Error adding document: ', e);
        }
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
