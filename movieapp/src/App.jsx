// 4181f635
import "./App.css";
import searchIcon from "./assets/seachIcon.png";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=4181f635";

const App = () => {
  const [movies, setMovies] = useState([]);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    searchMovies("Jurassic Park");
  });

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data);
    setMovies(data.Search);
  };

  // useEffect(() => {
  //   console.log("I'm App Component, I'm Being called");
  // }, []);

  // LifeCycle Stages of you React Component

  return (
    <>
      <div className="app">
        <h1>Movie App</h1>
        <div className="search">
          <input
            type="text"
            value={"Superman"}
            onChange={() => {}}
            placeholder="Search for movies"
          />
          <img src={searchIcon} alt="search" onClick={() => {}} />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies Found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;

// API => Backend
// Application Programming Interface (handle request/response)
// JSON => JavaScript Object
// Free API Platform
