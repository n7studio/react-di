import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDependency } from 'react-di'

function App() {

  const hello = useDependency('hello')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {hello}
      </header>
    </div>
  );
}

export default App;
