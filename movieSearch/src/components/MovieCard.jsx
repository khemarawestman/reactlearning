import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className='MovieCards'>
        <div>
      <img src={movie.Poster} alt={`Poster för ${movie.Title}`} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
