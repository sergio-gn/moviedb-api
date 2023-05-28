import React, { useState, useEffect } from 'react';

const OMDBComponent = () => {
  const [movieData, setMovieData] = useState(null);
  const apiKey = 'b40ff113';
  const imdbId = 'tt3896198';
  const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setMovieData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieData.Title}</h1>
      <img src={movieData.Poster} alt={movieData.Title} />
    </div>
  );
};

export default OMDBComponent;
