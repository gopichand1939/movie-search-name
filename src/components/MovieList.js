import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, images }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={movie.key} movie={movie} image={images[index]} />
      ))}
    </div>
  );
};

export default MovieList;
