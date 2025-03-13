import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // Stores search text

  return (
    <div> <img src="/movie.svg" alt="movie" id="movie" />
     <div className="navbar">
  <button onClick={() => onSearch(query)}>
    <img src="/search.svg" alt="search"/>
  </button>
  <input
    type="text"
    placeholder="Search your Movie"
    value={query}
    onChange={(e) => {
      setQuery(e.target.value);
      onSearch(e.target.value); // Call onSearch instantly
    }}
  />
</div>
</div>
  );
};

// ✅ Define PropTypes here
Navbar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Ensures onSearch is a function
};

export default Navbar;
