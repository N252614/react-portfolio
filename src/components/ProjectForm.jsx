import React, { useState } from "react";

// ProjectForm component allows the user to add a new project
function ProjectForm({ onAddProject }) {
  // Local state for each input field
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // Handler for form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default page reload

    // Create a new project object with the input values
    const newProject = {
      id: crypto.randomUUID(), // Unique ID for the project
      title,
      description,
      image,
    };

    // Call the callback function passed from the parent to add the new project
    onAddProject(newProject);

    // Reset form fields after submission
    setTitle("");
    setDescription("");
    setImage("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>Add New Project</h2>

      {/* Title input with placeholder, required for tests and user experience */}
      <label>
        Title:
        <input
          type="text"
          placeholder="Title" // This is used by tests
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      {/* Description input as textarea */}
      <label>
        Description:
        <textarea
          placeholder="Description" // Used by tests
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>

      {/* Image URL input */}
      <label>
        Image URL:
        <input
          type="text"
          placeholder="Image URL" // Used by tests
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </label>

      {/* Submit button */}
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;