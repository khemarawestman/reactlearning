import React from 'react'
import MovieCard from './MovieCard';

    const DisplayMovies = (props) => {
        const { movies } = props;
        const movieCardComponents = movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.imdbID} />;
        });
        return <section>{movieCardComponents}</section>;
      };
     export default DisplayMovies;