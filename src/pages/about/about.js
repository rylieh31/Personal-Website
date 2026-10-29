import React from "react";
import "./about.css";
import mainPhoto from "../../images/me401photo.JPEG";
import secondPhoto from "../../images/mehiking.jpeg";

const skillCategories = [
  {
    title: "Electrical Design",
    skills: ["Cadence OrCAD/Allegro", "Altium Designer", "Circuit Design", "PCB Design", "LTspice"],
  },
  {
    title: "Programming",
    skills: ["Verilog/VHDL", "Python", "C/C++", "JavaScript/TypeScript", "HTML/CSS"],
  },
  {
    title: "Test Equipment",
    skills: ["Oscilloscopes", "Function Generators", "Digital Multimeters", "Power Supplies"],
  },
  {
    title: "Hardware and Tools",
    skills: ["ESP32", "Arduino", "Raspberry Pi", "Relays", "Sensors", "Motor Controllers", "Power Electronics"],
  },
  {
    title: "Collaboration / Soft Skills",
    skills: ["Management Experience", "Team Problem-solving", "Mentorship", "Customer Service"],
  },
];

const About = () => {
  return (
    <section className="about">
      <h1 className="about-title">About Me</h1>

      {/* Top section: Main photo + Paragraph */}
      <div className="top-section">
        <img src={mainPhoto} alt="Rylie" className="profile-photo" />

        <div className="info-section">
          <p className="description">
            Hi, I'm Rylie!<br /><br />
            I’m an Electrical Engineering student at Virginia Tech, and I’m currently a Electrical Engineering Intern at Moog Inc. I have a passion for electric vehicles, aerospace systems, and hands-on electrical systems. I love designing and wiring circuits, creating schematics, and building solutions that combine hardware and software.<br /><br />
            Outside of engineering, I enjoy hiking, biking, and running, keeping active and exploring the outdoors. I thrive on learning new technologies, solving challenging problems, and collaborating with teams to bring projects to life.
          </p>
        </div>
      </div>

      {/* Bottom section: Skill categories + Second photo */}
      <div className="bottom-section">
        <div className="skills-section">
          <h3>Skills</h3>
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h4>{category.title}</h4>
              <div className="skills">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="second-photo-section">
          <img src={secondPhoto} alt="Rylie at work/project" className="second-photo" />
        </div>
      </div>
    </section>
  );
};

export default About;