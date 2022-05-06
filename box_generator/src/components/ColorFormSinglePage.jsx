import react, { useState } from 'react';
    
const ColorForm = (props) => {
    const [color, setColor] = useState("");
    const [colors, setColors] = useState([]);
    const makeBoxes = colors.map((color) => 
    <div style={{backgroundColor:color , height:'100px', width:'100px', margin:'5px' , border:'solid black 2px', boxShadow:'5px 5px 10px black'}}></div>);
    // <li style={{backgroundColor:{color}}}>{arrayItem}</li>);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (color){
            colors.push(color)
            setColor("")
        }
    };
    
    return (
        <div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <form onSubmit={ handleSubmit }>
                    <h1>Create a Box!</h1>
                    <input type="text"
                        placeholder="Enter a Color"
                        onChange={ (e) => setColor(e.target.value) }
                        value={ color }
                    ></input>
                    <br />
                    <input type="submit" value="Create Box" />
                </form>
            </div>
            <hr />
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {makeBoxes}
            </div>
        </div>
    );
};
    
export default ColorForm;