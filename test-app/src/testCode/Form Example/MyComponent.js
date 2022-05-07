import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser.username);
        setUsername("")
        setEmail("")
        setPassword("")
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                {/* e is the event handler variable that contains information about the input it's referencing */}
                {/* value = {username} allows us to persist the information in the input field after it's been cleared */}
                {/* on line 13-15, setUsername("") will reset the form after we have retrieved the data from the input field. */}
                <input type="text" onChange={ (e) => setUsername(e.target.value) } value={username} /> 
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={password} />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;