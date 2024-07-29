import React from 'react';
import './semester.css'; // Import the CSS file

const FileDownload = () => {
  const files = [
    { name: 'Semester 1 - Mathematics', url: 'gammabeta probablity.pdf' },
    { name: 'Semester 2 - Physics', url: 'sem2-physics.pdf' },
    { name: 'Semester 3 - Chemistry', url: 'sem3-chemistry.pdf' },
  ];

  const handleDownload = async (fileName) => {
    const url = `http://localhost:8000/downloads/download/${encodeURIComponent(fileName)}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
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
              onClick={() => handleDownload(file.url)}
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
