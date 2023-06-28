import React, { useState,useEffect } from 'react';
import MovieComponent from './MovieComponent';
import './Home.css';



function Home() {
    
   
    //TMDB 

    const API_KEY = 'api_key=d62b9f08c7e24702fe7b7bedf129c3e4';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    const [movieItems, setMovieItems] = useState([]);

    const GetMovies = (url) => {
        useEffect(() => {
            const fetchMovies = async () => {
              try {
                const response = await fetch(url);
                const data = await response.json();
                setMovieItems(data.results);
              } catch (error) {
                console.error('Error fetching movies:', error);
              }
            };
        
            fetchMovies();
          }, [url]);
    }

    GetMovies(API_URL);
    console.log(movieItems);

  return (
    <>
        <header>
            <form>
                <input type="text" placeholder='Search' id="Search" class="search"></input>
            </form>
        </header>

        <main id="main">
        {movieItems.map((item) => (
          
            <MovieComponent
              image={IMG_URL + item.poster_path}
              title={item.title}
              score={item.vote_average}
              overview={item.overview}
            />
          
        ))}
      
        </main>

      
      
    </>
  );
}

export default Home;