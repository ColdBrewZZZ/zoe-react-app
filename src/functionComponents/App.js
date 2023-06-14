
import React from 'react';
import { ClassButtonRow } from './ButtonRow';
import { DisplayNumber } from './DisplayNumber';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNumber: ''
    };
    this.selectNewNumber = this.selectNewNumber.bind(this);
  }

  selectNewNumber(newSelectedNumber){
    this.setState(({ selectedNumber: newSelectedNumber}))
  }


  render() {
    return (
      <div>
        <ClassButtonRow
          number="1"
          functionCheck={this.selectNewNumber}
        />
        <ClassButtonRow
          number="2"
          functionCheck={this.selectNewNumber}
        />
        <ClassButtonRow
          number="3"
          functionCheck={this.selectNewNumber}
        />
        <ClassButtonRow
          number="4"
          functionCheck={this.selectNewNumber}
        />
        <ClassButtonRow
          number="5"
          functionCheck={this.selectNewNumber}
        />
        <ClassButtonRow
          number="6"
          functionCheck={this.selectNewNumber}
        />
        <DisplayNumber
          selectedNumber = {this.state.selectedNumber}
        />
      </div>
      
    );
  }
}

export default App;
