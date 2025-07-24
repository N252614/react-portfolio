import React from 'react';

// SearchBar component allows the user to filter projects by typing a search term
function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search projects..." // Text displayed inside the input before user types
      value={searchTerm}              // Controlled input bound to searchTerm state
      onChange={(e) => onSearch(e.target.value)} // Triggered whenever user types; calls onSearch with the input value
      style={{
        padding: '0.5rem',            // Inner spacing
        fontSize: '1rem',             // Text size
        marginBottom: '1rem',         // Space below input
        width: '100%',                // Full container width
        maxWidth: '400px',            // Maximum width
        borderRadius: '4px',          // Rounded corners
        border: '1px solid #ccc'      // Border styling
      }}
    />
  );
}

export default SearchBar;