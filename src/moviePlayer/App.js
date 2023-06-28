import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faDownload } from "@fortawesome/free-solid-svg-icons";
import movie1 from './movies/movie1react.mp4';
import movie2 from './movies/movie2react.mp4';
import movie3 from './movies/movie3react.mp4';
import React, { useState, useEffect, useRef } from 'react';

const App = () => {
    const [selectedMovie, setSelectedMovie] = useState([
      { index: 2, name: 'A Ha - Take On Me', video: movie1 },
      { index: 1, name: 'El Chombo', video: movie2 },
      { index: 0, name: 'Lofi Boy', video: movie3 },
    ]);
  
    const [movieIndex, setMovieIndex] = useState(null);
    
    const [loading, setLoading] = useState(false);
    const videoRef = useRef(null);
  
    const movieClicked = (index) => {
      setLoading(true);
      setSelectedMovie(
        selectedMovie.map((movie) =>
          movie.index === index ? { ...movie, clicked: true } : { ...movie, clicked: false }
        )
      );
      setMovieIndex(index);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
  
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play();
      }
    }, [movieIndex]);
  
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-5">
            <ul className="list-group">
              <li className="list-group-item active">Choose a Video</li>
              {selectedMovie.map((movie) => (
                <li
                  key={movie.index}
                  className={`list-group-item ${movie.clicked ? 'selected' : ''}`}
                  onClick={() => movieClicked(movie.index)}
                  style={movie.clicked ? { backgroundColor: '#b4bac1' } : {}}
                >
                  <FontAwesomeIcon icon={movie.clicked ? faPlay : faPause} /> {movie.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md">
            <marquee behavior="alternate">
              <span className="badge badge-pill badge-primary">
                {selectedMovie[((selectedMovie.length - 1) - movieIndex) % 3].name}
              </span>
            </marquee>
            {loading ? (
              <div style={{ backgroundColor: '#b4bac1', padding: '10px' }}>
              Loading...<br />
              <FontAwesomeIcon icon={faDownload} />
            </div>
            ) : (
              selectedMovie[movieIndex] && (
                <video controls ref={videoRef}>
                  <source src={selectedMovie[movieIndex].video} type="video/mp4" />
                </video>
              )
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default App;
  