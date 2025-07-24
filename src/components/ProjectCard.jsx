import React from 'react';

// ProjectCard component displays the title and description of a single project
// It also provides a delete button to remove the project
function ProjectCard({ project, onDelete }) {
  // Destructure title and description from the project object
  const { title, description } = project;

  return (
    <div className="project-card">
      {/* Display the project title */}
      <h3>{title}</h3>
      
      {/* Display the project description */}
      <p>{description}</p>
      
      {/* Delete button triggers onDelete with the project ID */}
      <button onClick={() => onDelete(project.id)}>❌</button>
    </div>
  );
}

export default ProjectCard;