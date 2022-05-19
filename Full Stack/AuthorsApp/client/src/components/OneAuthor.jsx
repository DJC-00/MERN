import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const OneAuthor = () => {

    const {_id} = useParams();
    const history = useHistory();
    const [oneAuthor, setOneAuthor] = useState({})

    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/api/authors/${_id}`)
        .then(response => {
            console.log(response)
            history.push("/")
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${_id}`)
        .then(response => 
            setOneAuthor(response.data.results))
        .catch(error => console.log(error))
        console.log("go")
    },[_id])


    return (
        <div className='container mx-auto'>      
        <div className='d-flex justify-content-center'>
            <div className="card w-50 text-white bg-primary mt-5 shadow">
                <img className="card-img-top" src="holder.js/100x180/" alt=""/>
                <div className="card-body">
                    <h4 className="card-title py-3 border-1 border-bottom border-top text-center">📜 ___  {oneAuthor.name} ___ 📜</h4>
                </div>

            </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3 pt-2">
            <button onClick={deleteAuthor} type="button" class="btn btn-danger">Delete {oneAuthor.name}</button>
            <Link to={`/`}type="button" className="btn btn-outline-primary">Home</Link>
        </div>
                
    </div>
    );
}

export default OneAuthor;

