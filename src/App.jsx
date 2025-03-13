import { useState } from "react";
import MovieList from "./components/All-Movie"
import Navbar from "./components/navbar"
const App = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Stores search text

  return (
    <div>
      <h1 className="fade-text">Have a Pleasant Watch</h1>
      <div>
    <Navbar onSearch={setSearchQuery} /> {/* Pass function to update searchQuery */}
    <MovieList searchQuery={searchQuery} /> {/* Pass searchQuery to filter movies */}
  </div>
  </div>
  );
};


export default App
