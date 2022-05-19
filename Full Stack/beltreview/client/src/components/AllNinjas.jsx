import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const AllNinjas = (props) => {
    
    const [ninjaList, setNinjaList] = useState([]);
    const [delToggle, setDelToggle] = useState(false)


    const deleteNinja = (_id) => {
        axios.delete(`http://localhost:8000/api/ninjas/${_id}`)
        .then(response => {
            console.log(response)
            // Remove from Dom without refresh
            // setNinjaList(ninjaList.filter(ninja => ninja._id != _id))
            
            // Trigger useEffect by changing delToggle
            setDelToggle(!delToggle)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/ninjas")
        .then(response => {
            console.log(response.data.results)
            setNinjaList(response.data.results)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [delToggle, props.newNinjaToggle]);

    return (
        <div className='container bg-primary py-5 p mb-5 rounded border border-1 shadow shadow-lg'>
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
                            <Link to={`ninjas/edit/${ninja._id}`}type="button" className="btn btn-outline-primary">Edit</Link>
                            <button onClick={(e) => deleteNinja(ninja._id)} type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default AllNinjas;
