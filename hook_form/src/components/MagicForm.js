import React, { useState } from 'react';

const MagicForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [passCon, setPassCon] = useState("");  
    
    const displayInput = (e) => {
        e.preventDefault();
    }

    return(
        <>
        <div className='container w-50 text-center border border-1 shadow mt-5 p-3'>
            <form onChange={displayInput}>
                <div className='row'>
                    <label className='col'>First Name: </label>
                    <input className='col mr-3' type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div className='row'>
                    <label  className='col'>Last Name: </label>
                     <input className='col mr-3' type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div className='row'>
                    <label className='col'>Email Address: </label>
                    <input className='col mr-3 ' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className='row'>
                    <label className='col'>Password: </label>
                    <input className='col mr-3' type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className='row'>
                    <label className='col'>Password Confirm: </label>
                    <input className='col mr-3' type="password" onChange={(e) => setPassCon(e.target.value)} value={passCon} />
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
        <div className='container w-50 text-center border border-1 shadow mt-5 p-3'>
            <p>First Name: <span className='text-primary'>{firstName}</span></p>
            <p>Last Name: <span className='text-primary'>{lastName}</span></p>
            <p>Email: <span className='text-primary'>{email}</span></p>
            <p>Password: <span className='text-primary'>{password}</span></p>
            <p>Password Confirm: <span className='text-primary'>{passCon}</span></p>
        </div>

        </>
    );
}

export default MagicForm;