import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  const handleSearch = async (query) => {
    const movieResponse = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const movieData = await movieResponse.json();
    const movies = movieData.docs.slice(0, 10); // Get the first 10 movies
    setMovies(movies);

    const imagePromises = movies.map(() =>
      fetch('https://dog.ceo/api/breeds/image/random').then((res) => res.json())
    );
    const imageResults = await Promise.all(imagePromises);
    const images = imageResults.map((result) => result.message);
    setImages(images);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} images={images} />
    </div>
  );
};

export default App;
