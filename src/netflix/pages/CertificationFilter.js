import React from 'react';

function CertificationFilter(props) {
  
  const handleCertificationClick = (certification) => {
    props.setCertification(certification);
  }

  return (
    <div>
      <h1>Ratings:</h1>
      <ul>
        {props.certifications.map((certification) => (
          <button onClick={() => handleCertificationClick(certification)}>{certification}</button>
        ))}
        <button onClick={() => handleCertificationClick(0)}>All</button>
      </ul>
    </div>
  );
}

export default CertificationFilter;


