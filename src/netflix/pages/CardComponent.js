import React from 'react';


function CardComponent(props) {
  return (
    <div class="movie">
      <h3>{props.title}</h3>
      <img className="border mt-2 border-dark rounded" src={props.image} alt={props.title} />
      <div>Score: {props.score}</div>
      <div>Overview: {props.overview}</div>
    </div>
  );
}

export default CardComponent;
