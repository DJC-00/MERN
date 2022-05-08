import React, { useState } from 'react';
import Pokemon from './components/Pokemon';
import PokeButton from './components/PokeButton';
import PokeAxios from './components/PokeAxios';

function App() {
  return (
    <div className="App">
      {/* <Pokemon/> */}
      {/* <PokeButton /> */}
      <PokeAxios /> 
    </div>
  );
}

export default App;
