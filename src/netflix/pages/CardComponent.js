import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';



function CardComponent(props) {

  const navigate = useNavigate();

  const navigateToDedicatedPage = () => {
    navigate('/DedicatedPage');
  }


  return (
    <div class="movie" onClick={navigateToDedicatedPage}>
      <h3>{props.title}</h3>
      <img className="border mt-2 border-dark rounded" src={props.image} alt={props.title} />
      <div>Score: {props.score}</div>
      <div>Overview: {props.overview}</div>
    </div>
  );
}

export default CardComponent;



