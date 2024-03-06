import React, { useState } from 'react';

const SearchMovies = ({ onSearch }) => {
  const [movie, setMovie] = useState('');

  const handleChange = (event) => {
    setMovie(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(movie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Sök efter filmer..."
        value={movie}
        onChange={handleChange}
      />
      <button type="submit">Sök</button>
    </form>
  );
};

export default SearchMovies;
