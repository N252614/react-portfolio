import React from 'react';
import ProjectCard from './ProjectCard';

// ProjectList component receives a list of projects and a callback to delete a project
function ProjectList({ projects, onDelete }) {
  return (
    <div>
      <h2>Projects</h2>
      {/* Iterate over the list of projects and render a ProjectCard for each one */}
      {projects.map((project) => (
        <ProjectCard
          key={project.title} // Use project title as a unique key
          project={project}   // Pass the entire project object as a prop
          onDelete={() => onDelete(project)} // Define what happens when delete is triggered
        />
      ))}
    </div>
  );
}

export default ProjectList;