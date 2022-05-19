import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthorEdit = () => {

    const history = useHistory();
    const {_id} = useParams();
    const [authorInfo, setAuthorInfo] = useState({})
    const[errors, setErrors] = useState({
        name : "",
    })

    const formChange = (e) =>{
        if(e.target.type == "checkbox"){
            setAuthorInfo({
                ...authorInfo,
                [e.target.name] : e.target.checked,
            })
        } else{
            setAuthorInfo({
                ...authorInfo,
                [e.target.name] : e.target.value,
            })
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${_id}`, authorInfo)
        .then(response => {
            if(response.data.error){
                setErrors(response.data.error.errors)   
            } else{
                history.push(`/authors/${_id}`)
            }
        })
        .catch()
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then(response =>{
            setAuthorInfo(response.data.results)
            console.log(authorInfo)
        })
        .catch(error => {console.log(error)})
    }, []);

    
    return (
            <div>
                <div className="container">
                    <div className="w-50 mx-auto">
                        <h2 className='text-center'>Edit Author {_id}</h2>
                        {authorInfo ? 
                            <form onSubmit={submitHandler}>
                            <div className="form-group pb-2">
                                <label htmlFor="name">Name </label>
                                <input type="text" onChange={formChange} className="form-control" name="name" value={authorInfo.name} />
                                <p className='text-danger text-center w-50 mx-auto'>{errors.name?.message}</p>
                            </div>
                            <button type="submit" className="btn btn-primary">Update</button>
                            <Link to={`/`} type="button" className=" btn btn-outline-dark mx-2 shadow">Cancel</Link>
                            </form>
                        :
                            <div>
                                <div className='text-center border-danger border-2 border p-3'>
                                    <h2>❌ Author ID not found ❌</h2>
                                    <h3> Would you like to add that author to the list?</h3>
                                </div>
                                    <div className="d-flex justify-content-center pt-3">
                                        <Link to={`/authors/new`} type="button" className=" btn btn-outline-dark mx-2 shadow">Add Author</Link>
                                        <Link to={`/`} type="button" className=" btn btn-outline-danger mx-2 shadow">Cancel</Link>
                                    </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        );

    }

export default AuthorEdit;
