import React from 'react';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Skill from './components/skill/Skill';
import Projects from './components/myprojects/Projects'
import AboutMe from './components/about/AboutMe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
