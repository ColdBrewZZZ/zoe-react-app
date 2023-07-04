import React from 'react';
import { useNavigate } from 'react-router-dom';

function CardComponent(props) {
  const navigate = useNavigate();

  const navigateToDedicatedPage = () => {
    navigate('/DedicatedPage', { state: { title: props.title, image: props.image, id: props.id, type: props.type, overview: props.overview } });
  };

  return (
    <div className="movie" onClick={navigateToDedicatedPage} style={{ cursor: 'pointer'}}>
      <h3>{props.title}</h3>
      <img className="border mt-2 border-dark rounded" src={props.image} alt={props.title} />
      <div>Score: {props.score}</div>
      <div>Overview: {props.overview}</div>
    </div>
  );
}

export default CardComponent;
