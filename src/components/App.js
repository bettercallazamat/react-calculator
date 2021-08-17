import '../styles/App.css';
import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const result = calculate(
      this.state,
      btnName,
    );
    this.setState({ ...result });
    console.log(this.state);
  }

  render() {
    const { next, total } = this.state;
    const result = next
      ? next && next.toString()
      : total && total.toString();

    return (
      <div className="App">
        <>
          <Display result={result || '0'} />
          <ButtonPanel clickHandler={this.handleClick} />
        </>
      </div>
    );
  }
}
