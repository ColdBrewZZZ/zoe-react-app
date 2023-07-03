import React from 'react';
import { useLocation } from 'react-router-dom';

function DedicatedPage() {
  const location = useLocation();
  const { title, image } = location.state;

  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="image" />
    </div>
  );
}

export default DedicatedPage;
