import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [username, setUsername] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [isValid, setIsValid] = useState(false);
    
    const handleTitle = (e) => {
        setTitle(e.target.value);
        if(e.target.value.length < 1) {
            setTitleError("Title is required!");
            setIsValid(false)
        } else if(e.target.value.length < 3) {
            setTitleError("Title must be 3 characters or longer!");
            setIsValid(false)
        } else{
            setTitleError("")
            setIsValid(true)
        }
    }
    const createUser = (e) => {
        e.preventDefault()
        if (isValid){
            e.preventDefault();
            const newUser = { username, email, password };
            console.log("Welcome", newUser);
            setHasBeenSubmitted( true );
        } else{
            console.log("Invalid Input")
        }
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };
    
    {/* rest of component removed for brevity */}
    
    if(!hasBeenSubmitted){
        return (
            <form onSubmit={ createUser }>
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={ handleTitle } />
                    {
                        titleError ?
                        <p style={{color:'red'}}>{ titleError }</p> :
                        ''
                    }
                </div>
                
                <input type="submit" value="Create Movie" />
            </form>
        );
    }
    else{
        return(
            <>
            <h1>{formMessage()}</h1>
            </>
        );
    }
}
export default UserForm;