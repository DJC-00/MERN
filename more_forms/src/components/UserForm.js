import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passCon, setPassCon] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passConError, setPassConError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [isValid, setIsValid] = useState(true);
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
            setIsValid(false)
        } else if(e.target.value.length < 3) {
            setFirstNameError("First Name must be 3 characters or longer!");
            setIsValid(false)
        }  else{
            setFirstNameError("")
            setIsValid(true)
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
            setIsValid(false)
        } else if(e.target.value.length < 3) {
            setLastNameError("Last Namemust be 3 characters or longer!");
            setIsValid(false)
        } else{
            setLastNameError("")
            setIsValid(true)
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
            setIsValid(false)
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
            setIsValid(false)
        } else{
            setEmailError("")
            setIsValid(true)
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(password)
        console.log(passCon)
        if(e.target.value != passCon) {
            setPassConError("Passwords Do Not Match.");
            setIsValid(false)
        } else{
            setPassConError("");
            setIsValid(false)
        }
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
            setIsValid(false)
        } else if(e.target.value.length < 3) {
            setPasswordError("Password must be 3 characters or longer!");
            setIsValid(false)
        } else{
            setPasswordError("")
            setIsValid(true)
        }
    }

    const handlePassCon = (e) => {
        setPassCon(e.target.value);
        if(e.target.value != password) {
            setPassConError("Passwords Do Not Match.");
            setIsValid(false)
        } else{
            setPassConError("");
            setIsValid(false)
        }
    }
    const createUser = (e) => {
        e.preventDefault()
        if (isValid){
            e.preventDefault();
            const newUser = { firstName, lastName, email, password };
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
            <div style={{display:'flex', justifyContent:'center'}}>
                <form onSubmit={ createUser }>
                    <div>
                        <label>First Name: </label>
                        <input type="text" onChange={ handleFirstName } />
                        {
                            firstNameError ?
                            <p style={{color:'red'}}>{ firstNameError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" onChange={ handleLastName } />
                        {
                            lastNameError ?
                            <p style={{color:'red'}}>{ lastNameError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" onChange={ handleEmail } />
                        {
                            emailError ?
                            <p style={{color:'red'}}>{ emailError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <label>Password : </label>
                        <input type="text" onChange={ handlePassword }/>
                        {
                            
                            passwordError ?
                            <p style={{color:'red'}}>{ passwordError }</p> :
                            ''
                        }
                        {
                            passConError ?
                            <p style={{color:'red'}}>{ passConError }</p> :
                            ''
                        }
                    </div>
                    <div>
                        <label>Password Confirm: </label>
                        <input type="text" onChange={ handlePassCon } />
                    </div>
                </form>
            </div>
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