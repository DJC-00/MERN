import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const EditNinjaRob = () => {

    const history = useHistory();
    const {_id} = useParams();
    const [ninjaInfo, setNinjaInfo] = useState({})
    const[errors, setErrors] = useState({
        name : "",
        numProjects : "",
        gradDate : "",
    })

    const formChange = (e) =>{
        if(e.target.type == "checkbox"){
            setNinjaInfo({
                ...ninjaInfo,
                [e.target.name] : e.target.checked,
            })
        } else{
            setNinjaInfo({
                ...ninjaInfo,
                [e.target.name] : e.target.value,
                
            })
            
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/ninjas/${_id}`, ninjaInfo)
        .then(response => {
            if(response.data.error){
                setErrors(response.data.error.errors)   
            } else{
                history.push(`/ninjas/${_id}`)
            }
        })
        .catch()
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/ninjas/${_id}`)
        .then(response =>{
            // Format date for HTML
            response.data.results.gradDate = response.data.results.gradDate.slice(0,10)
            setNinjaInfo(response.data.results)
            console.log(ninjaInfo)
        })
        .catch(error => {console.log(error)})
    }, []);

    return (
            <div>
                <div className="container">
                    <div className="w-50 mx-auto">
                        <h2>Edit Ninja {_id}</h2>
                        <form onSubmit={submitHandler}>
                        <div className="form-group pb-2">
                            <label htmlFor="name">Name </label>
                            <input type="text" onChange={formChange} className="form-control" name="name" value={ninjaInfo.name} />
                            <p className='text-danger text-center w-50 mx-auto'>{errors.name?.message}</p>
                        </div>
                        <div className="form-group pb-2"> 
                            <label htmlFor="numProjects">Number of Projects</label>
                            <input type="number" onChange={formChange} className="form-control" name="numProjects" value={ninjaInfo.numProjects}/>
                            <p className='text-danger text-center w-50 mx-auto'>{errors.numProjects?.message}</p>
                        </div>
                        <div className="form-group pb-2 ">
                            <label htmlFor="gradDate">Graduation Date</label>
                            <input type="date" onChange={formChange} className="form-control" name="gradDate" value={ninjaInfo.gradDate}/>
                            <p className='text-danger text-center w-50 mx-auto p-2'>{errors.gradDate?.message}</p>
                        </div>
                        <div className="form-group pb-2">
                            <input type="checkbox" onChange={formChange} className=" me-2 form-check-input" name="isVeteran" checked={ninjaInfo.isVeteran}/>
                            <label className="form-check-label" htmlFor="isVeteran">Is a veteran?</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

export default EditNinjaRob;
