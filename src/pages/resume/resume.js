import React from 'react';
import './resume.css';
import myResume from "../../documents/Rylie_Horning_s_Resume.pdf"

const Resume = () => {
  return (
     <div style={{ width: "100%", height: "90vh", display: "flex", justifyContent: "center" }}>
      <iframe
        src={myResume}
        title="Resume"
        width="80%"
        height="100%"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
      ></iframe>
    </div>
  );
};

export default Resume;