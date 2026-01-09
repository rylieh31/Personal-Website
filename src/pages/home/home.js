import React from 'react';
import './home.css';
import me from '../../images/home page.png';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-text">
        <h1>Hi, I'm Rylie Horning.</h1>
        <p className="subtitle">
          I am an Electrical Engineering student at Virginia Tech, passionate about bridging hardware and software.
        </p>
        <a className="project-button" href="/projects">Explore My Projects</a>
      </div>

      <img src={me} alt="Me" className="photohome" />
    </div>
  );
};

export default Home;