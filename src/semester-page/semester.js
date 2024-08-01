// src/page1-components/FileDownload.js

import React from 'react';
import './semester.css'; // Import the CSS file

const FileDownload = () => {
  const files = [
    { name: 'Semester 1 - English', url: 'https://raw.githubusercontent.com/SatVerseX/shlokverse/main/docs/English%20class%20notes%20%28unit%201%2C%202%2C%203%29.pdf' },
    { name: 'Semester 2 - Physics', url: 'https://raw.githubusercontent.com/SatVerseX/shlokverse/main/docs/sem2-physics.pdf' }, // Example URL
    { name: 'Semester 3 - Chemistry', url: 'https://raw.githubusercontent.com/SatVerseX/shlokverse/main/docs/sem3-chemistry.pdf' }, // Example URL
  ];

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="container2">
      <h1 className="heading2">Download Your Study Materials</h1>
      <ul className="file-list">
        {files.map((file, index) => (
          <li className="file-item" key={index}>
            <span className="file-name">{file.name}</span>
            <button
              className="download-button"
              onClick={() => handleDownload(file.url, file.name)}
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileDownload;
