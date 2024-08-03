// src/page1-components/FileDownload.js

import React, { useState } from 'react';
import Select from 'react-select';
import './semester.css'; // Import the CSS file

const FileDownload = () => {
  const [selectedSemester, setSelectedSemester] = useState({ value: 1, label: 'Semester 1' });
  const [selectedSubject, setSelectedSubject] = useState({ value: 'English', label: 'English' });

  const semesterOptions = [...Array(8).keys()].map(i => ({
    value: i + 1,
    label: `Semester ${i + 1}`
  }));

  const subjectOptions = [
    { value: 'English', label: 'English' },
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Physics', label: 'Physics' },
    { value: 'Chemistry', label: 'Chemistry' },
    { value: 'C Programming', label: 'C Programming' },
    { value: 'Universal Human Values', label: 'Universal Human Values'},
  ];

  const files = [
    { name: 'English Notes', url: 'https://drive.google.com/uc?export=download&id=1xARp9GqubavvdUd19JSeyhjZNVmrQTS_', semester: 1, subject: 'English' },
    { name: 'English-II (question paper)', url: 'https://drive.google.com/uc?export=download&id=13snuVYfJuCd-QBbv3pm7_XWtulDEfeei', semester: 1, subject: 'English' },
    { name: 'English February', url: 'https://drive.google.com/uc?export=download&id=15b7sKIUrWyUZ63dfz8EOwBplyKiGnk7_', semester: 1, subject: 'English' },
    { name: 'ENGLISH-I 2022 (30 MARKS)', url: 'https://drive.google.com/uc?export=download&id=1GANQaKlTBLVZJOvlJiwr5f5R5l3f7qM8', semester: 1, subject: 'English' },
    { name: 'ENGLISH-I 2022 (50 MARKS)', url: 'https://drive.google.com/uc?export=download&id=1XdNDfo-S0ADNzHCKOZzvt7PAKT9A-Seg', semester: 1, subject: 'English' },
    { name: 'C PYQ 2023.docx', url: 'https://docs.google.com/document/d/14G8tZ2zmvPW0AeHIuiv2CyjZbo6g1e7B/export?format=pdf', semester: 1, subject: 'C Programming' },
    { name: 'C Theory PYQ 2023.pdf', url: 'https://drive.google.com/uc?export=download&id=1Dk9JVicOQiDqZ12kEHxVeFoR_Fb-bdfU', semester: 1, subject: 'C Programming' },
    { name: 'C-PROGRAMMING 2024 (70 MARKS)', url: 'https://drive.google.com/uc?export=download&id=1pK9XTMAMcK1CJrJU-eNwIdQ_0hKf1cGe', semester: 1, subject: 'C Programming' },
    { name: 'MATHEMATICS-II (30 MARKS)', url: 'https://drive.google.com/uc?export=download&id=1np5GuKgNESb4DLSBwOn30JCA0pyX4jL9', semester: 1, subject: 'Mathematics' },
    { name: 'MATHEMATICS-II (50 MARKS)', url: 'https://drive.google.com/uc?export=download&id=1DI5wmtvNME1XPKocnO6rXHivpvP0wk8N', semester: 1, subject: 'Mathematics' },
    { name: 'MATHEMATICS-II (70 MARKS)', url: 'https://drive.google.com/uc?export=download&id=1484s8rP8wuHMfKj0nP7dlYj-wjjYWWLX', semester: 1, subject: 'Mathematics' },
    { name: 'MATHEMATICS-I 2024 (70MARKS)', url: 'https://drive.google.com/uc?export=download&id=1K2CFsFI-f7HRMkBIWSsS6qOj5Q5bIXfW', semester: 1, subject: 'Mathematics' },
    { name: 'CHEMISTRY-I 2024 (70 MARKS)', url: 'https://drive.google.com/uc?export=download&id=1drtXco6Jpo13-D95uD7QBq1kRAxLWFdT', semester: 1, subject: 'Chemistry' },
    { name: 'PHYSICS-I 2024 -CSE (70 MARKS)', url: 'https://drive.google.com/uc?export=download&id=1cIrKvkuCIy9wz7IDFULvz2zS6ADuSRiE', semester: 1, subject: 'Physics' },
    { name: 'UNIVERSAL HUMAN VALUES 2024 (70 MARKS)', url: 'https://drive.google.com/uc?export=download&id=1phZO1CXZR_ESohlohJyXJpWDt2KEQlrO', semester: 1, subject: 'Universal Human Values' },
    // Add more files here as needed with their respective semesters and subjects
  ];

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleSemesterChange = (selectedOption) => {
    setSelectedSemester(selectedOption);
  };

  const handleSubjectChange = (selectedOption) => {
    setSelectedSubject(selectedOption);
  };

  const filteredFiles = files.filter(file => file.semester === selectedSemester.value && file.subject === selectedSubject.value);

  return (
    <div className="container2">
      <h1 className="heading2">Download Your Study Materials</h1>
      <div className="dropdown-container">
        <label htmlFor="semester-select" className="semester-label">Select Semester:</label>
        <Select
          id="semester-select"
          value={selectedSemester}
          onChange={handleSemesterChange}
          options={semesterOptions}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>
      <div className="dropdown-container">
        <label htmlFor="subject-select" className="subject-label">Select Subject:</label>
        <Select
          id="subject-select"
          value={selectedSubject}
          onChange={handleSubjectChange}
          options={subjectOptions}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>
      <ul className="file-list">
        {filteredFiles.length > 0 ? (
          filteredFiles.map((file, index) => (
            <li className="file-item" key={index}>
              <span className="file-name">{file.name}</span>
              <button
                className="download-button"
                onClick={() => handleDownload(file.url, file.name)}
              >
                Download
              </button>
            </li>
          ))
        ) : (
          <li className="file-item">No files available for the selected semester and subject.</li>
        )}
      </ul>
    </div>
  );
};

export default FileDownload;
