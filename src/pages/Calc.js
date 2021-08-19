import React from 'react';
import App from '../components/App';

const Calc = () => (
  <div className="calcDiv">
    <div className="calcText">
      <h2>Nobody:</h2>
      <h2>Literally no one:</h2>
      <h2>YOU: Lets do some math!</h2>
    </div>
    <div className="calcApp">
      <App />
    </div>
  </div>
);

export default Calc;
