import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
const OneNinja = () => {

    const {_id} = useParams();
    const history = useHistory();
    const [oneNinja, setOneNinja] = useState({})

    const deleteNinja = () => {
        axios.delete(`http://localhost:8000/api/ninjas/${_id}`)
        .then(response => {
            console.log(response)
            history.push("/")
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/ninjas/${_id}`)
        .then(response => 
            setOneNinja(response.data.results))
        .catch(error => console.log(error))
        console.log("go")
    },[_id])
    
    return (
        <div className='container mx-auto'>      
            <div className='d-flex justify-content-center'>
                <div className="card w-50 text-white bg-primary mt-5 shadow">
                    <img className="card-img-top" src="holder.js/100x180/" alt=""/>
                    <div className="card-body">
                        <h4 className="card-title pb-2 border-1 border-bottom text-center">{oneNinja.name}</h4>
                        <p className="card-text">Projects: {oneNinja.numProjects}</p>
                        <p className="card-text">Graduation Date: {oneNinja.gradDate}</p>
                        {oneNinja.isVeteran ? <p className="card-text">Veteran 🎖</p> : ""}
                        <p className='card-text text-white-50 border-top'>ID: {_id}</p>
                    </div>

                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-3 pt-2">
                <button onClick={deleteNinja} type="button" class="btn btn-danger">Delete {oneNinja.name}</button>
                <Link to={`/`}type="button" className="btn btn-outline-primary">Home</Link>
            </div>
                    
        </div>
    );
}

export default OneNinja;
