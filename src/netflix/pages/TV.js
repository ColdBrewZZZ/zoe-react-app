import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
import Filter from './Filter';
import './Home.css';

function TV(props) {
  // TMDB
  const API_KEY = props.API_KEY;
  const BASE_URL = props.BASE_URL;
  const IMG_URL = props.IMG_URL;
  const GENRE_LIST = '/genre/tv/list?';

  const [movieItems, setMovieItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [genreID, setGenreID] = useState(null);

  useEffect(() => {
    const API_URL = genreID
      ? `${BASE_URL}/discover/tv?sort_by=popularity.desc&with_genres=${genreID}&${API_KEY}`
      : `${BASE_URL}/trending/tv/day?sort_by=popularity.desc&${API_KEY}`;

    const fetchMovies = async () => {
      try {
        const url = searchQuery
          ? `${BASE_URL}/search/tv?query=${searchQuery}&include_adult=false&language=en-US&page=1&${API_KEY}`
          : API_URL;

        const response = await fetch(url);
        const data = await response.json();
        setMovieItems(data.results);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchMovies();
  }, [BASE_URL, API_KEY, genreID, searchQuery]);

  return (
    <>
      <header>
        <h1>TV</h1>
        <Filter
          BASE_URL={BASE_URL}
          API_KEY={API_KEY}
          GENRE_LIST={GENRE_LIST}
          setGenreID={setGenreID}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search"
            id="Search"
            className="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </header>

      <main id="main">
        {movieItems.map((item) => (
          <CardComponent
            key={item.id}
            image={IMG_URL + item.poster_path}
            title={item.name}
            score={item.vote_average}
            overview={item.overview}
          />
        ))}
      </main>
    </>
  );
}

export default TV;
