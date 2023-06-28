import React from 'react';

function HookButtonRow(props) {
  const selectNewNumberHandler = (btnNumber) => {
    props.functionCheck(btnNumber);
  }

  return (
    <div>
      <div className="container">
        <div className="text-center">
          <button className="btn col-3 mt-3 mx-5 btn-outline-danger" onClick={() => selectNewNumberHandler(props.number)}>{props.number}</button>
          <button className="btn col-3 mt-3 mx-5 btn-outline-success" onClick={() => selectNewNumberHandler(props.number * 2)}>{props.number * 2}</button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default HookButtonRow;
