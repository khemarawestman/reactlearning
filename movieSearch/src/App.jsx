import React, { useState } from 'react';
import SearchMovies from './components/SearchMovies';
import DisplayMovies from './components/DisplayMovies';
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (key) => {
    const url = `http://www.omdbapi.com/?apikey=37fe945a&s=${key}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div>
      <SearchMovies onSearch={searchMovies} />
      <DisplayMovies movies={movies} />
    </div>
  );
};

export default App;
