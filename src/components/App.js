import '../styles/App.css';
import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const state = {
    total: null,
    next: null,
    operation: null,
  };

  const [appState, setAppState] = useState(state);

  const handleClick = (btnName) => {
    const result = calculate(appState, btnName);
    setAppState(result);
  };

  const result = appState.next
    ? appState.next && appState.next.toString()
    : appState.total && appState.total.toString();

  return (
    <div className="App">
      <Display result={result || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
