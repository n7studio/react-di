import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDependency } from 'react-di'

function App() {

  const context = useDependency('hello')
  console.log(context)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       { context.hello()}
      </header>
    </div>
  );
}

export default App;
