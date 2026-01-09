// my projects : led car project, nicks led sign, WalTer, SafeTrek, this website

import React from 'react';
import './projects.css';
import SafeTrek from '../../images/SafeTrek.JPG';

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-card">
        <img src={SafeTrek} alt="SafeTrek Team" className="photo" />
        <p className="title">Automotive Electronics Project</p>
        <p className="summary">
          Designed and implemented an automotive electronics system integrating sensors and controllers.
        </p>
      </div>

      <div className="project-card">
        <img src={SafeTrek} alt="Project" className="photo" />
        <p className="title">Smart Home System</p>
        <p className="summary">
          Developed a smart home prototype combining IoT sensors and mobile interface.
        </p>
      </div>

      <div className="project-card">
        <img src={SafeTrek} alt="Project" className="photo" />
        <p className="title">Robotics Control Board</p>
        <p className="summary">
          Built a robotics controller with embedded software and circuit integration.
        </p>
      </div>
    </div>
  );
};

export default Projects;