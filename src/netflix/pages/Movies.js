import React, { useState,useEffect } from 'react';
import CardComponent from './CardComponent';
import './Home.css';



function Movies(props) {
    
   
    //TMDB 

    const API_KEY = props.API_KEY;
    const BASE_URL = props.BASE_URL;
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
    const IMG_URL = props.IMG_URL;
    

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
          
            <CardComponent
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

export default Movies;