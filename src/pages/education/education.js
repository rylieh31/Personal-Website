import React from "react";
import "./education.css";

// Logos
import vtLogo from "../../images/vt logo.png";
import nrccLogo from "../../images/nrcc logo.png";
import chsLogo from "../../images/chs logo.png";

const education = [
  {
    school: "Virginia Tech",
    degree: "B.S. in Engineering: Electrical Engineering with a minor in Computer Science",
    date: "Aug 2024 – May 2028",
    logo: vtLogo,
    highlights: ["GPA: 3.66/4.00", "Computer Science Minor"]
  },
  {
    school: "New River Community College",
    degree: "Associate of Arts and Sciences: Computer Science",
    date: "Aug 2021 – May 2024",
    logo: nrccLogo,
    highlights: ["Completed concurrently with High School","GPA: 4.00/4.00", "President's List"]
  },
  {
    school: "Christiansburg High School",
    degree: "Advanced High School Diploma",
    date: "Aug 2020 – May 2024",
    logo: chsLogo,
    highlights: ["GPA: 4.00/4.00", "Class Vice President", "FRC Team 401"]
  }
];

const Education = () => {
  return (
    <section className="education">
      <h1 className="education-title">My Education</h1>

      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="card-content">
              <div className="description">
                <h4 className="school">{edu.school}</h4>
                <h3 className="degree">{edu.degree}</h3>
                <span className="date">{edu.date}</span>
                <div className="highlights">
                  {edu.highlights.map((item, i) => (
                    <span key={i} className="highlight-chip">{item}</span>
                  ))}
                </div>
              </div>
              <img src={edu.logo} alt={`${edu.school} logo`} className="card-logo-ed" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;