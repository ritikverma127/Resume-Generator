import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const Side = ({ name, email, password }) => {
  const resumeRef = useRef();

  const handleGenerateResume = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();

    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('resume.pdf');
  };

  return (
    <div className="resume-container">
      <div className="resume-content" ref={resumeRef} style={{ padding: '20px', backgroundColor: '#e6e6fa', borderRadius: '10px' }}>
        <h1 style={{ fontSize: '24px', color: '#00008b' }}>Resume</h1>
        <p style={{ fontSize: '20px', color: '#000' }}><strong>Name:</strong> {name}</p>
        <p style={{ fontSize: '20px', color: '#000' }}><strong>Email:</strong> {email}</p>
        <p style={{ fontSize: '20px', color: '#000' }}><strong>Password:</strong> {password}</p>
      </div>
      <button onClick={handleGenerateResume}>Generate Resume</button>
    </div>
  );
};

export default Side;
