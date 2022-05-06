import react, { useState } from 'react';
    
    
const Box = (props) => {
    const displayInput = (e) => {
        e.preventDefault();

    }

    return (
        <div>
            <div onChange={displayInput} style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {props.colorArray.map(color => <div style={{backgroundColor:color , height:'100px', width:'100px', margin:'5px' , border:'solid black 2px', boxShadow:'5px 5px 10px black'}}></div>)}
            </div>
        </div>
    );
};
    
export default Box;