import React from 'react';

function Display(props) {
  return (
    <div>
      <div className="container bg-info text-center opacity-25">
        <p className="p-2">you've clicked <span>{props.selectedNumber}</span></p>
      </div>
    </div>
  );
}

export default Display;
