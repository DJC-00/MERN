import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const AllNinjas = () => {
    
    const [ninjaList, setNinjaList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/ninjas")
        .then(response => {
            console.log(response.data.results)
            setNinjaList(response.data.results)
        })
        .catch(error=>{
            console.log(error)
        })
    }, []);

    return (
        <div>
            <div className='d-flex flex-wrap justify-content-center gap-3'>
                {ninjaList.map( ninja => {
                    return(
                        <div key = {ninja._id} className="card shadow px-2 m-2">
                        <img className="card-img-top" src="holder.js/100x180/" alt=""/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to={`/ninjas/${ninja._id}`}>{ninja.name}</Link></h4>
                            <p className="card-text">Projects: {ninja.numProjects}</p>
                            <p className="card-text">Graduation Date: <br/>{ninja.gradDate.slice(0,10)}</p>
                            {ninja.isVeteran ? <p>Veteran 🎖</p> : ""}
                        </div>
                        <div className="d-flex flex-wrap justify-content-center gap-3 pb-2">
                            <Link to={`/edit/${ninja._id}`}type="button" className="btn btn-outline-primary">Edit</Link>
                            <Link to="" type="button" className="btn btn-danger">Delete</Link>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default AllNinjas;
