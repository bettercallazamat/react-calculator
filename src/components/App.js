import '../styles/App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  calculate({
    next: 0,
    operation: '+',
    total: 0,
  });
  return (
    <div className="App">
      <>
        <Display />
        <ButtonPanel />
      </>
    </div>
  );
};

export default App;
