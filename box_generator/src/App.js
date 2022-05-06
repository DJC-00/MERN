import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import Box from './components/Box';


function App() {
  const [colors, setColors] = useState([]);
  const [currentMsg, setCurrentMsg] = useState("");
    
  const addColorToArray = ( color ) => {

    // colors.push(color)
    console.log(colors, colors.length)
    // setColors(colors => [...colors,color])
    setColors([...colors,color])
    // setCurrentMsg(color)
  };
  
  return (
    <>
    <div style={{padding:'20px'}}>
      <ColorForm onNewColor={ addColorToArray }/>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      <Box colorArray={colors}/>
      </div>
    </div>
    </>
  );
}

export default App;
