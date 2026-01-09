import React from "react";
import "./experience.css";

import moog from "../../images/moog logo.png";
import vtes from "../../images/vtes logo.png";
import vtlib from "../../images/vt libraries logo.png";
import mcs from "../../images/mcs logo.png";
import frc from "../../images/frc401 logo.png";

const experiences = [
  {
    title: "Supply Chain Intern",
    company: "Moog Inc",
    date: "Jul 2025 - Present",
    logo: moog,
    description:
      "I create clear, ISO-9001-aligned work instructions based on the tasks our team performs in SAP. I also support the supply chain group with various needs to help keep operations running smoothly.",
    skills: ["SAP ERP", "Process Documentation", "Technical Writing"],
  },
  {
    title: "Engineering Intern",
    company: "Virginia Tech Electrical Service",
    date: "Oct 2024 - Jul 2025",
    logo: vtes,
    description:
      "I assisted with updating power distribution schematics in AutoCAD Electrical, collected field equipment data using a Trimble GPS device, and supported engineers with electrical system installation and maintenance.",
    skills: ["AutoCAD Electrical", "Field Data Collection", "Trimble GPS"],
  },
  {
    title: "Prototyping Consultant",
    company: "Virginia Tech University Libraries",
    date: "Oct 2024 - Dec 2025",
    logo: vtlib,
    description:
      "I provided consultation support, troubleshooted equipment, and helped maintain a clean, safe, and welcoming environment for those using the Virginia Tech University Libraries Prototyping Studio.",
    skills: [
      "Customer Support",
      "Equipment Troubleshooting",
      "Communication",
      "Inventory Management",
    ],
  },
  {
    title: "Electrical Engineering Intern",
    company: "Motion Control Systems Inc",
    date: "Jan 2024 - Sep 2024",
    logo: mcs,
    description:
      "I assisted with circuit board setup and soldering for electrical control system testing, contributed to custom circuit board design using LTspice, and supported engineers by applying Python programming skills in hardware testing and simulation.",
    skills: ["Circuit Assembly", "LTspice", "Python", "Soldering"],
  },
  {
    title: "Electrical Lead",
    company: "First Robotics Competition Team 401",
    date: "Aug 2022 - May 2024",
    logo: frc,
    description:
      "As Electrical Lead for FRC Team 401, I designed the robot’s electrical system—including wiring, power distribution, and sensor integration. I also created detailed wiring schematics using Fritzing and helped the team qualify for international competition and reach the quarterfinals.",
    skills: [
      "Electrical System Design",
      "Wiring & Power Distribution",
      "Fritzing Schematics",
      "Robotics",
      "Team Leadership",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h1 className="experience-title">My Experience</h1>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-card">
              <div className="card-header">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="card-logo"
                />
                <span className="date">{exp.date}</span>
              </div>

              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>

              <div className="skills">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;