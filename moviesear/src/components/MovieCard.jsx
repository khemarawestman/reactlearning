import React from 'react'
import SearchMovies from './SearchMovies'
const MovieCard = (props) => {
  

  const { movie } = props;
  return (
    <article>
      <img src={movie.Poster} />
      <h2>{movie.Title}</h2>
      <h3>{movie.Year}</h3>
    </article>
  )
}

export default MovieCard
