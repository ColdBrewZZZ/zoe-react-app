
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
        {
          [1, 2,3,4,5,6].map(number => <ClassButtonRow
            number={number}
            functionCheck={this.selectNewNumber}
          />)
        }       
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
