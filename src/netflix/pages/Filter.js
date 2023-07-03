import React, { useState, useEffect } from 'react';

function Filter(props) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const url = `${props.BASE_URL}${props.GENRE_LIST}${props.API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, [props.BASE_URL, props.GENRE_LIST, props.API_KEY]);

  const handleGenreClick = (genre) => {
    props.setGenreID(genre.id);
  };

  return (
    <div>
      <h1>Genres:</h1>
      <ul>
        {genres.map((genre) => (
            <button onClick={() => handleGenreClick(genre)}>{genre.name}</button>
        ))}
         <button onClick={() => handleGenreClick(0)}>All</button>
      </ul>
    </div>
  );
}

export default Filter;
