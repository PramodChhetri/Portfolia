import React from 'react';
import './Projects.css';
import Project1 from "../../assets/project-1.png";
import Project2 from "../../assets/project-2.png";
import Project3 from "../../assets/project-3.png";

const projectsData = [
  {
    title: 'Project One',
    image: Project1,
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://github.com/'
  },
  {
    title: 'Project Two',
    image: Project2,
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://github.com/'
  },
  {
    title: 'Project Three',
    image: Project3,
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://github.com/'
  },
  {
    title: 'Project Four',
    image: Project1,
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://github.com/'
  },
  {
    title: 'Project Five',
    image: Project2,
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://github.com/'
  },
  {
    title: 'Project Six',
    image: Project3,
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://github.com/'
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
              <button className="project-button" onClick={() => window.open(project.liveDemoLink)}>
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
