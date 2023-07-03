import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DedicatedPage from './pages/DedicatedPage';
import TV from './pages/TV';
import Movies from './pages/Movies';
import './App.css';

function App() {
    const API_KEY = 'api_key=d62b9f08c7e24702fe7b7bedf129c3e4';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    


  const navigate = useNavigate();

  const navigateToTV = () => {
    navigate('/TV');
  };

  const navigateToMovies = () => {
    navigate('/Movies');
  };

 

  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>Netflix</h1>
        <ul className="navbar-nav mr-auto">
          <button className="btn nav-link" onClick={navigateToTV}>TV</button>
          <button className="btn nav-link" onClick={navigateToMovies}>Movies</button>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Movies
        API_KEY={API_KEY}
        BASE_URL={BASE_URL}
        IMG_URL={IMG_URL} />} />
        <Route path="/DedicatedPage" element={<DedicatedPage />} />
        <Route path="/TV" element={<TV 
        API_KEY={API_KEY}
        BASE_URL={BASE_URL}
        IMG_URL={IMG_URL}/>} />
        <Route path="/Movies" element={<Movies 
        API_KEY={API_KEY}
        BASE_URL={BASE_URL}
        IMG_URL={IMG_URL}/>} />
      </Routes>
    </div>
  );
}

export default App;
