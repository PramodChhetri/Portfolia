import React from 'react';
import './Projects.css';
import Evergreen from "../../assets/Evergreen.png";
import TextNinja from "../../assets/TextNinja.png";
import FoodRhino from "../../assets/FoodRhino.png"
import PortfolioPic from "../../assets/portfoliaposter.png";
import LaravelAPI from "../../assets/laravelAPI.png";
import LaravelAPISanctum from "../../assets/laravelAPISanctum.png";


const projectsData = [
  {
    title: 'Evergreen',
    image: Evergreen,
    githubLink: 'https://github.com/PramodChhetri/Laravel-Evergreen',
    liveDemoLink: '#'
  },
  {
    title: 'TextNinja',
    image: TextNinja,
    githubLink: 'https://github.com/PramodChhetri/React-TextNinja',
    liveDemoLink: 'https://pramodchhetri.github.io/React-TextNinja/'
  },
  {
    title: 'FoodRhino',
    image: FoodRhino,
    githubLink: '#',
    liveDemoLink: '#'
  },
  {
    title: 'Portfolio',
    image: PortfolioPic,
    githubLink: 'https://github.com/PramodChhetri/Portfolia',
    liveDemoLink: '#'
  },
  {
    title: 'Laravel API',
    image: LaravelAPI,
    githubLink: 'https://github.com/PramodChhetri/API-Basics',
    liveDemoLink: '#'
  },
  {
    title: 'Sanctum Auth',
    image: LaravelAPISanctum,
    githubLink: 'https://github.com/PramodChhetri/API-Sanctum',
    liveDemoLink: '#'
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <span className="projectsTitle">Projects</span>
      <div className="projectsContainer">
        {projectsData.map((project, index) => (
          <div key={index} className="projectDetailsContainer color-container">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="project-image"
              />
            </div>
            <h2 className="project-subtitle">{project.title}</h2>
            <div className="project-buttons-container">
              <button className="project-button" onClick={() => window.open(project.githubLink)}>
                View on GitHub
              </button>
              {
                project.liveDemoLink !== "#" && (
                  <button className="project-button" onClick={() => window.open(project.liveDemoLink)}>
                    Live Demo
                  </button>
                )
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
