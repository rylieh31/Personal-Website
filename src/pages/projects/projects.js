// my projects : led car project, nicks led sign, WalTer, SafeTrek, this website

import React from "react";
import "./projects.css";
import SafeTrek from "../../images/SafeTrek.JPG";
import Placeholder from "../../images/projects placeholder.webp"
import OnAir from "../../images/On Air Schematic.jpg"
import Walter from "../../images/WalTer.JPG"
import MyWebsite from "../../images/My Website.png"

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects">
      {/* project 1 : Car project */}
      <div className="project-card">
        <img src={Placeholder} alt="Automotive Electronics" className="photo" />

        <div className="project-content">
          <h3 className="title">Automotive Electronics Project</h3>

          <div className="project-divider" />

          <p className="summary">
            Installed a night-triggered LED interior lighting system using headlight signals and an automotive relay.
          </p>

          <div className="project-tags">
            <span>12v DC Systems</span>
            <span>Fuses</span>
            <span>Relay</span>
            <span>Vehicle Wiring</span>
          </div>

          {/* <div className="project-buttons">
            <a href="#" target="_blank" rel="noopener noreferrer">Demo</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div> */}

          
        </div>
      </div>

      {/* Project 2: Led Sign */}
      <div className="project-card">
        <img src={OnAir} alt="Smart Home System" className="photo" />

        <div className="project-content">
          <h3 className="title">Wi-Fi ‘On Air’ LED Controller</h3>

          <div className="project-divider" />

          <p className="summary">
            Built an ESP32-based web-controlled LED sign with relay power switching and stable local network operation.
          </p>

          <div className="project-tags">
            <span>ESP32</span>
            <span>IoT</span>
            <span>Arduino</span>
            <span>Embedded Systems</span>
            <span>Wi-Fi</span>
            <span>GPIO</span>
            <span>HTTP</span>
            <span>Relay</span>

          </div>

          <div className="project-buttons">
            {/*<a href="#">Demo</a>*/}
            {/*<a href="#">GitHub</a>*/}
          </div>

          
        </div>
      </div>

      {/* Project 3: SafeTrek */}
      <div className="project-card">
        <img src={SafeTrek} alt="Robotics Control Board" className="photo" />

        <div className="project-content">
          <h3 className="title">SafeTrek</h3>

          <div className="project-divider" />

          <p className="summary">
            2025 HackViolet award-winning web project the recommends travel suggestions based on user input to help women travel safely.
          </p>

          <div className="project-tags">
            <span>Node.js</span>
            <span>React</span>
            <span>Astro.js</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
          </div>

          <div className="project-buttons">
            
            <a href="https://github.com/HackViolet2025Team/hackviolet2025team.github.io">GitHub</a>
          </div>

        
        </div>
      </div>

      {/* Project 4: WalTer */}
      <div className="project-card">
        <img src={Walter} alt="Robotics Control Board" className="photo" />

        <div className="project-content">
          <h3 className="title">WalTer</h3>

          <div className="project-divider" />

          <p className="summary">
            Custom autonomous personal inventory management robot developed for the Penn State University Biannual Hackathon.
          </p>

          <div className="project-tags">
            <span>Arduino Uno R4</span>
            <span>Raspberry Pi Zero 2</span>
            <span>Python</span>
            <span>C++</span>
            <span>React</span>
            <span>TypeScript</span>
          </div>

          <div className="project-buttons">
            {/*<a href="#">Demo</a>*/}
            <a href="https://github.com/honzikschenk/WalTer">GitHub</a>
          </div>

        
        </div>
      </div>

      {/* Project 5: This Website */}
      <div className="project-card">
        <img src={MyWebsite} alt="Robotics Control Board" className="photo" />

        <div className="project-content">
          <h3 className="title">Personal Portfolio Website</h3>

          <div className="project-divider" />

          <p className="summary">
            My personal portfolio featuring my projects, skills, and experience, with a clean, modern tech-inspired design.
          </p>

          <div className="project-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML/CSS</span>
          </div>

          <div className="project-buttons">
            <a href="https://ryliehorning.me">Demo</a>
            <a href="https://github.com/rylieh31/Personal-Website">GitHub</a>
          </div>

        
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projects;