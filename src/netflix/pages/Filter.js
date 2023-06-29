import React, { useState, useEffect } from 'react';



function Filter(props) {
  
    const genres = `${props.BASE_URL}${props.GENRE_LIST}${props.API_KEY}`

  return (
    <div>
      <h1>{genres}</h1>
      
    </div>
  );
}

export default Filter;