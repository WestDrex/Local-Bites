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
    // Implement your search logic here
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

// import React from "react";
// import "../Components/hero.css";

// export default function Hero() {
//   return (
//     <section className="hero-container">
//       <h1>Local Bites</h1>
//       <p>Food for you and me</p>
//       <div className="searchbar">
//         <input
//           type="text"
//           placeholder="Search places and foods"
//           className="searchbutton "
//         />
//       </div>
//     </section>
//   );
// }
