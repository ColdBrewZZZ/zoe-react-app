import React from 'react';

export class ClassButtonRow extends React.Component {
  constructor(props) {
    super(props);
    this.selectNewNumberHandler = this.selectNewNumberHandler.bind(this);
  }

  selectNewNumberHandler(btnNumber){
    this.props.functionCheck(btnNumber);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <button className="btn col-3 mt-3 mx-5 btn-outline-danger" onClick={() => this.selectNewNumberHandler(this.props.number)}>{this.props.number}</button>
            <button className="btn col-3 mt-3 mx-5 btn-outline-success" onClick={() => this.selectNewNumberHandler(this.props.number * 2)}>{this.props.number * 2}</button>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}
