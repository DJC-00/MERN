import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AuthorForm = (props) => {
    const history = useHistory();
    const[name, setName] = useState("")
    const[errors, setErrors] = useState({
        name : ""
    })
    // console.log(isVeteran)

    const addAuthor = (e) =>{
        e.preventDefault()
        let formInfo = {
            name
        }
        history.push("/")
        // console.log(formInfo)

        axios.post('http://localhost:8000/api/authors', formInfo)
        .then(response =>{
            if(response.data.error){
                setErrors(response.data.error.errors)
                
            } else{
                console.log(errors)
                setName("");
                props.setNewAuthorToggle(!props.newAuthorToggle)
            }
        })
        .catch(error => {console.log(error)})
    }
    console.log(errors)
    return (
        <div>
            <div className="container">
                <div className="w-50 mx-auto">
                    <h2>Create a new Author!</h2>
                    <form onSubmit={addAuthor}>
                    <div className="form-group pb-2">
                        <label htmlFor="name">Name </label>
                        <input onChange={(e) => setName(e.target.value)}   type="text" className="form-control" id="name" value={name}/>
                        <p className='text-danger text-center w-50 mx-auto p-2'>{errors.name?.message}</p>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4 my-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AuthorForm;
