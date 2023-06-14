import React, { useState } from 'react';
import HookButtonRow from './HookButtonRow';
import Display from './Display';

function App() {
  const [selectedNumber, setSelectedNumber] = useState('');

  const selectNewNumber = (newSelectedNumber) => {
    setSelectedNumber(newSelectedNumber);
  }

  return (
    <div>
      <HookButtonRow
        number="1"
        functionCheck={selectNewNumber}
      />
      <HookButtonRow
        number="2"
        functionCheck={selectNewNumber}
      />
      <HookButtonRow
        number="3"
        functionCheck={selectNewNumber}
      />
      <HookButtonRow
        number="4"
        functionCheck={selectNewNumber}
      />
      <HookButtonRow
        number="5"
        functionCheck={selectNewNumber}
      />
      <HookButtonRow
        number="6"
        functionCheck={selectNewNumber}
      />
      <Display
        selectedNumber={selectedNumber}
      />
    </div>
  );
}

export default App;
