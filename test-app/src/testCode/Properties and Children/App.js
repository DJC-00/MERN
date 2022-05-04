import React from 'react';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
        <MyComponent header={ "Property Header" }>
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
        </MyComponent>  
    </div>
  );
}
    
export default App;