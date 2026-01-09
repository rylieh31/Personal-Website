// my projects : led car project, nicks led sign, WalTer, SafeTrek, this website

import React from "react";
import "./projects.css";
import SafeTrek from "../../images/SafeTrek.JPG";

const Projects = () => {
  return (
    <section className="projects">
      {/* PROJECT 1 */}
      <div className="project-card">
        <img src={SafeTrek} alt="Automotive Electronics" className="photo" />

        <div className="project-content">
          <h3 className="title">Automotive Electronics Project</h3>

          <div className="project-divider" />

          <p className="summary">
            Designed an embedded electronics system integrating sensors and
            controllers for automotive applications.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>Arduino</span>
            <span>Embedded C</span>
          </div>

          <div className="project-buttons">
            <a href="#" target="_blank" rel="noopener noreferrer">Demo</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>

          
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="project-card">
        <img src={SafeTrek} alt="Smart Home System" className="photo" />

        <div className="project-content">
          <h3 className="title">Smart Home System</h3>

          <div className="project-divider" />

          <p className="summary">
            Built a home automation prototype using IoT sensors and a mobile app
            interface for real-time monitoring and control.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>Python</span>
            <span>MQTT</span>
          </div>

          <div className="project-buttons">
            <a href="#">Demo</a>
            <a href="#">GitHub</a>
          </div>

          
        </div>
      </div>

      {/* PROJECT 3 */}
      <div className="project-card">
        <img src={SafeTrek} alt="Robotics Control Board" className="photo" />

        <div className="project-content">
          <h3 className="title">Robotics Control Board</h3>

          <div className="project-divider" />

          <p className="summary">
            Developed a robotics control board integrating custom PCB design,
            firmware, and hardware-level debugging.
          </p>

          <div className="project-tags">
            <span>C++</span>
            <span>PCB Design</span>
            <span>Microcontrollers</span>
          </div>

          <div className="project-buttons">
            <a href="#">Demo</a>
            <a href="#">GitHub</a>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Projects;