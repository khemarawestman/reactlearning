import React from 'react';
import MovieCard from './MovieCard';

const DisplayMovies = ({ movies }) => {
  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imbID} movie={movie} />)
      ) : (
        <p>Inga filmer hittades.</p>
      )}
    </div>
  );
};

export default DisplayMovies;
