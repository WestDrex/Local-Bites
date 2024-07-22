import React, { useState } from "react";
import "../Components/searchbar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <button type="submit" className="search-button">
          <i className="fa fa-search"></i> Search
        </button>
        <input
          type="text"
          placeholder="Search places and foods"
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
      </form>
    </div>
  );
};

export default SearchBar;
