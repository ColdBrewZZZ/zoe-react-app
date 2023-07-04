import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function DedicatedPage() {
  const location = useLocation();
  const { title, image, id, type, overview } = location.state;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjJiOWYwOGM3ZTI0NzAyZmU3YjdiZWRmMTI5YzNlNCIsInN1YiI6IjY0OWFlOTBlZDM1ZGVhMDE0ZGNlNmFmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-Z38mAaJo1Bk3BTcOHw4iqDk0UtTWJ4pDIZwySC2Wgc'
          }
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}/images`,
          options
        );
        const data = await response.json();
        setImages(data.backdrops);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1 className="text-center">{title}</h1>
      <div className="row">
        <img className="col-md-5 ml-5" src={image} alt="image" />
        <p className="col-md-5 ml-5 text-light">{overview}</p>
      </div>
      

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images &&
          images.map((image) => (
            <div key={image.file_path} style={{ margin: '10px' }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                alt="image"
                style={{ width: '200px', height: 'auto' }}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default DedicatedPage;
