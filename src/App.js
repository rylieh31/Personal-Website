import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Experience from './pages/experience/experience';
import Education from './pages/education/education';


function App() {
  return (
 <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  );
}

export default App;
