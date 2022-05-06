import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import Box from './components/Box';


function App() {
  const [colors, setColors] = useState([]);
  const [currentMsg, setCurrentMsg] = useState("");
    
  const addColorToArray = ( color ) => {

    colors.push(color)
    console.log(colors, colors.length)
    setColors(colors)
    setCurrentMsg(color)
  };
  
  return (
    <>
    <div style={{padding:'20px'}}>
      <ColorForm onNewColor={ addColorToArray }/>
      <Box colorArray={colors}/>
      {/* <MessageForm ColorForm={ youveGotMail } />
      <MessageDisplay message={ currentMsg } /> */}
    </div>
    </>
  );
}

export default App;
