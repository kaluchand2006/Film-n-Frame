import React from "react";
import { Link } from "react-router-dom";
import "../styles/Project.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cinematic Feature Film",
      description: "Award-winning feature film that premiered at international film festivals",
      category: "Feature Film",
      year: "2025"
    },
    {
      id: 2,
      title: "Commercial Campaign",
      description: "High-end commercial campaign for luxury brand with cinematic storytelling",
      category: "Commercial",
      year: "2025"
    },
    {
      id: 3,
      title: "Documentary Series",
      description: "Emmy-nominated documentary series exploring cultural heritage",
      category: "Documentary",
      year: "2025"
    },
    {
      id: 4,
      title: "Music Video Production",
      description: "Cinematic music video for chart-topping artist with visual storytelling",
      category: "Music Video",
      year: "2025"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Our Work</h2>
        <p className="mb-4">
          Discover our portfolio of award-winning projects that showcase our 
          commitment to cinematic excellence and creative storytelling.
        </p>
        
        <div className="project-grid">
          {projects.map(project => (
            <Link to={`/project/${project.id}`} key={project.id} className="project-card-link">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;