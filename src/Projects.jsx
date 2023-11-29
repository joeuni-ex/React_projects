import React from "react";
import { projects } from "./data";

const Projects = () => {
  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project"
          >
            <img src={project.image} alt="birthday buddy" className="img" />
            <h5>{project.title}</h5>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
