import React from 'react';
import './Projects.css';
import Evergreen from "../../assets/Evergreen.png";
import TextNinja from "../../assets/TextNinja.png";
import FoodRhino from "../../assets/FoodRhino.png"
import PortfolioPic from "../../assets/portfoliaposter.png";
import LaravelAPI from "../../assets/laravelAPI.png";
import LaravelAPISanctum from "../../assets/laravelAPISanctum.png";
import NetflixClone from "../../assets/NetflixClone.png";
import NewsWave from "../../assets/NewsWave.png";
import AppointmentManager from "../../assets/AppointmentManager.png";


const projectsData = [
  {
    title: 'Laravel',
    image: Evergreen,
    githubLink: 'https://github.com/PramodChhetri/Laravel-Evergreen',
    liveDemoLink: 'https://evergreen.pramodchhetri.com.np'
  },
  {
    title: 'React',
    image: TextNinja,
    githubLink: 'https://github.com/PramodChhetri/React-TextNinja',
    liveDemoLink: 'https://pramodchhetri.github.io/React-TextNinja/'
  },
  {
    title: 'Laravel',
    image: AppointmentManager,
    githubLink: 'https://github.com/PramodChhetri/Laravel-AMS',
    liveDemoLink: 'https://ams.pramodchhetri.com.np'
  },
  {
    title: 'React',
    image: NetflixClone,
    githubLink: 'https://github.com/PramodChhetri/React-NetflexClone',
    liveDemoLink: 'https://pramodchhetri.github.io/React-NetflexClone/'
  },
  {
    title: 'Core PHP',
    image: FoodRhino,
    githubLink: 'https://github.com/PramodChhetri/FoodRhino',
    liveDemoLink: '#'
  },
  {
    title: 'React',
    image: NewsWave,
    githubLink: 'https://github.com/PramodChhetri/React-NewsWave',
    liveDemoLink: 'https://pramodchhetri.github.io/React-NewsWave/'
  },
  {
    title: 'React',
    image: PortfolioPic,
    githubLink: 'https://github.com/PramodChhetri/Portfolia',
    liveDemoLink: 'https://pramodchhetri.com.np'
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
