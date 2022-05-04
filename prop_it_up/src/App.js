import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div style={{padding:' 0 5em' }}>
        <PersonCard
          firstName={"Doug"}
          lastName={"Dimmadome"}
          age={"54"}
          hairColor={"White"}/>
      </div>
      <div style={{padding:' 0 5em' }}>
        <PersonCard
          firstName={"Frodo"}
          lastName={"Baggins"}
          age={"153"}
          hairColor={"Auburn"}/>
      </div>
      <div style={{padding:' 0 5em' }}>
        <PersonCard
          firstName={"Lil"}
          lastName={"Wayne"}
          age={"39"}
          hairColor={"Black"}/>
      </div>
      <div style={{padding:' 0 5em' }}>
        <PersonCard
          firstName={"Jester"}
          lastName={"Lavorre"}
          age={"28"}
          hairColor={"Blue"}/>
      </div>
    </div>
  );
}

export default App;
