import logo from './logo.svg';
import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <div style={{color:'blue', display:'block', alignItems:'start'}}>
        <h1>Hello Dojo</h1>
        <h2>Things I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
      <div>
        <MyComponent someText={"Hello World"} otherText={"a"}/>
      </div>
      </div>
    </div>
  );
}

export default App;
