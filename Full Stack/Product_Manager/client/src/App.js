
import './App.css';
import React from 'react';
import Test from './views/Test'
import NavBar from './components/NavBar';
import ThingForm from './components/ProductForm';

function App() {
  return (
    <div className="App">
      <div className = "p-6">
        <ThingForm/>
        {/* <NavBar/>
        <Test/> */}
      </div>
    </div>
  );
}

export default App;
