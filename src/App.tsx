import React from 'react';
import line from './line.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={line} alt="line" height="100%" width="100%"/>
      </header>
    </div>
  );
}

export default App;
