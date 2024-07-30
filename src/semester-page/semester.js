// src/page1-components/FileDownload.js

import React from 'react';
import './semester.css'; // Import the CSS file

const FileDownload = () => {
<<<<<<< HEAD
  const files = [
    { name: 'Semester 1 - English', url: 'English class notes (unit 1, 2, 3).pdf' },
    { name: 'Semester 2 - Physics', url: 'files/sem2-physics.pdf' },
    { name: 'Semester 3 - Chemistry', url: 'files/sem3-chemistry.pdf' },
=======
  //const baseUrl = 'https://satversx.github.io/shlokverse'; // Base URL for GitHub Pages
  const files = [
    { name: 'Semester 1 - English', url: `English%20class%20notes%20(unit%201,%202,%203).pdf` },
    { name: 'Semester 2 - Physics', url: `sem2-physics.pdf` },
    { name: 'Semester 3 - Chemistry', url: 'sem3-chemistry.pdf` },
>>>>>>> 56b40f0ecb57b569466e2929747d8fae4fcec68c
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
