import React from 'react';
import './home.css';
import { ReactComponent as CircuitSVG } from '../../images/Circuit Divider Long.svg';

const Home = () => {
  return (

<nav className="home">
  
    <dev>
      <CircuitSVG className="circuit-bg" />
      <h1>Rylie Horning</h1>
      <p className="subtitle">Electrical Engineering Student at Virginia Tech</p>
      <hr />
      <p className="tagline">Passionate about bridging hardware and software</p>
      <a className="project-button" href="/projects">Explore My Projects</a>
     
    </dev>
</nav>
);
};

export default Home;