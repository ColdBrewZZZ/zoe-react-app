import React from 'react';


export class ClassComponentsChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '' 
    };
  }

  handleRadioChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  };


  render() {
    return (
      <div>
        <div class="container border">
          <div class="row border">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" 
              >
              <input type="radio" className="btn-check" name="btnradio" id="btnradio1"/>
              <label className="btn btn-outline-danger" htmlFor="btnradio1" value="1"
              onChange={this.handleRadioChange}>1</label>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
              <label className="btn btn-outline-success" htmlFor="btnradio2" value="1"
              onChange={this.handleRadioChange}>2</label>
            </div>
          </div>
          <div class="row border">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group"
              >
              <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
              <label className="btn btn-outline-danger" htmlFor="btnradio3" value="2"
              onChange={this.handleRadioChange}>2</label>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio4"/>
              <label className="btn btn-outline-success" htmlFor="btnradio4" value="2"
              onChange={this.handleRadioChange}>4</label>
            </div>
          </div>
          <div class="row border">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group"
              value="3"
              onChange={this.handleRadioChange}>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio5"/>
              <label className="btn btn-outline-danger" htmlFor="btnradio5">3</label>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio6"/>
              <label className="btn btn-outline-success" htmlFor="btnradio6">6</label>
            </div>
          </div>
          <div class="row border">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group"
              value="4"
              onChange={this.handleRadioChange}>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio7"/>
              <label className="btn btn-outline-danger" htmlFor="btnradio7">4</label>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio8"/>
              <label className="btn btn-outline-success" htmlFor="btnradio8">8</label>
            </div>
          </div>
          <div class="row border">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group"
              value="5"
              onChange={this.handleRadioChange}>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio9"/>
              <label className="btn btn-outline-danger" htmlFor="btnradio9">5</label>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio10"/>
              <label className="btn btn-outline-success" htmlFor="btnradio10">10</label>
            </div>
          </div>
          <div class="row border">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group"
              value="6"
              onChange={this.handleRadioChange}>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio11"/>
              <label className="btn btn-outline-danger" htmlFor="btnradio11">6</label>
              <input type="radio" className="btn-check" name="btnradio" id="btnradio12"/>
              <label className="btn btn-outline-success" htmlFor="btnradio12">12</label>
            </div>
          </div>
        </div> {/* container end */}
        <div class="container">
          <p>You've clicked <span>{this.state.selectedNumber}</span></p>
        </div>
      </div>
    );
  }
}


