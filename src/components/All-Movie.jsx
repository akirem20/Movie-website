import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const MovieList = ({ searchQuery = "" }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2Q0YWM1ZjQzMWIwM2E0MDkxNmVhNWZlNzVhMmQ5MSIsIm5iZiI6MTc0MDQzODk4Mi4zNDMwMDAyLCJzdWIiOiI2N2JjZmRjNmI0NmNjMzFiMjA2YmUyMjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.PAIbvTY1DKbzPCspr0hvZhGoskJB88IwEkicRNORDTo',
            },
          }
        );

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Popular Movies</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Define PropTypes here
MovieList.propTypes = {
  searchQuery: PropTypes.string, // Ensures searchQuery is a string
};

export default MovieList;
