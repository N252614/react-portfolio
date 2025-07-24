import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// Test that the main header is rendered on the page
test("renders header text", () => {
  render(<App />);
  // Check if the header "My Portfolio" is in the document
  expect(screen.getByText("My Portfolio")).toBeInTheDocument();
});

// Test that the form to add a new project is visible
test("renders project form", () => {
  render(<App />);
  // Check if the form heading "Add New Project" is in the document
  expect(screen.getByText("Add New Project")).toBeInTheDocument();
});

// Test that a new project can be added using the form
test("adds a new project when form is submitted", async () => {
  render(<App />);

  // Get the form input fields using their placeholder text
  const titleInput = screen.getByPlaceholderText(/title/i);
  const descriptionInput = screen.getByPlaceholderText(/description/i);
  const imageUrlInput = screen.getByPlaceholderText(/image url/i);
  const submitButton = screen.getByText(/add project/i);

  // Simulate user typing in all three fields
  await userEvent.type(titleInput, "New Project");
  await userEvent.type(descriptionInput, "This is a test project");
  await userEvent.type(imageUrlInput, "https://example.com/image.jpg");

  // Simulate clicking the "Add Project" button
  await userEvent.click(submitButton);

  // Expect the new project's title and description to appear on the page
  expect(screen.getByText("New Project")).toBeInTheDocument();
  expect(screen.getByText("This is a test project")).toBeInTheDocument();
});

// ✅ Test that a project can be removed by clicking the delete (❌) button
test("deletes a project when delete button is clicked", async () => {
  render(<App />);

  // Fill out the form with a project to delete
  const titleInput = screen.getByPlaceholderText(/title/i);
  const descriptionInput = screen.getByPlaceholderText(/description/i);
  const imageUrlInput = screen.getByPlaceholderText(/image url/i);
  const submitButton = screen.getByText(/add project/i);

  // Add the project
  await userEvent.type(titleInput, "To Delete");
  await userEvent.type(descriptionInput, "Delete me");
  await userEvent.type(imageUrlInput, "https://example.com/delete.jpg");
  await userEvent.click(submitButton);

  // Verify the project was added
  expect(screen.getByText("To Delete")).toBeInTheDocument();

  // Locate the correct ❌ button for this project
  const deleteButton = screen.getAllByText("❌").find((btn) =>
    btn.closest(".project-card")?.textContent?.includes("To Delete")
  );

  // Simulate clicking the delete button
  await userEvent.click(deleteButton);

  // Confirm the project is no longer in the document
  expect(screen.queryByText("To Delete")).not.toBeInTheDocument();
});