import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import SearchBar from './components/SearchBar';
import ProjectForm from './components/ProjectForm';
import initialProjects from './projects';
import './App.css';

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  // Adds a new project to the list
  const handleAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  // Deletes a project from the list by comparing the title
  // (comparison by object reference can fail in tests)
  const handleDeleteProject = (projectToDelete) => {
    const updatedProjects = projects.filter(
      (project) => project.title !== projectToDelete.title
    );
    setProjects(updatedProjects);
  };

  // Filters projects based on the search input
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <ProjectForm onAddProject={handleAddProject} />
      <ProjectList
        projects={filteredProjects}
        onDelete={handleDeleteProject}
      />
    </div>
  );
}

export default App;