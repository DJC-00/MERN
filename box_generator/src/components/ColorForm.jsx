import react, { useState } from 'react';
    
const ColorForm = (props) => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (color){
            setColor("")
            props.onNewColor( color )
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
            {/* <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {makeBoxes}
            </div> */}
        </div>
    );
};
    
export default ColorForm;