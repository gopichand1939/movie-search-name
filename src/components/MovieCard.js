import React from 'react';

const MovieCard = ({ movie, image }) => {
  return (
    <div className="movie-card">
      <img src={image} alt="Random Dog" />
      <h3>{movie.title}</h3>
      <p>{movie.author_name && movie.author_name.join(', ')}</p>
      <p>{movie.first_publish_year}</p>
    </div>
  );
};

export default MovieCard;
