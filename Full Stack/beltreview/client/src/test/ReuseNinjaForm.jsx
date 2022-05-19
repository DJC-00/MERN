import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ReuseNinjaForm = (props) => {
    const{ initName, initProj, onSubmitProp } = props;
    const[name, setName] = useState("")
    const[numProjects, setNumProjects] = useState("")
    const[gradDate, setGradDate] = useState("")
    const[isVeteran, setIsVeteran] = useState(false)
    const[errors, setErrors] = useState({
        name : "",
        numProjects : "",
        gradDate : "",
    })
    // console.log(isVeteran)

    const addNinja = (e) =>{
        e.preventDefault()
        let formInfo = {
            name,
            numProjects,
            gradDate,
            isVeteran
        }
        onSubmitProp({initName, initProj});
        // console.log(formInfo)

    const onSubmitHandler = e => {
        e.preventDefault();
        // onSubmitProp({firstName, lastName});
    }

        axios.post('http://localhost:8000/api/ninjas', formInfo)
        .then(response =>{
            if(response.data.error){
                setErrors(response.data.error.errors)
                
            } else{
                console.log(errors)
                setName("");
                setNumProjects("");
                setGradDate("");
                setIsVeteran(false);
            }
        })
        .catch(error => {console.log(error)})
    }
    console.log(errors)
    return (
        <div>
            <div className="container">
                <div className="w-50 mx-auto">
                    <h2>Create a new Ninja!</h2>
                    <form onSubmit={addNinja}>
                    <div className="form-group pb-2">
                        
                        <label htmlFor="name">Name </label>
                        <input onChange={(e) => setName(e.target.value)}   type="text" className="form-control" id="name" value={name}/>
                        <p className='text-danger text-center w-50 mx-auto p-2'>{errors.name?.message}</p>
                    </div>
                    <div className="form-group pb-2">
                        
                        <label htmlFor="numProjects">Number of Projects</label>
                        <input onChange={(e) => setNumProjects(e.target.value)}  type="number" className="form-control" id="numProjects" value={numProjects}/>
                        <p className='text-danger text-center w-50 mx-auto p-2'>{errors.numProjects?.message}</p>
                    </div>
                    <div className="form-group pb-2 ">
                        <label htmlFor="gradDate">Password</label>
                        <input onChange={(e) => setGradDate(e.target.value)} type="date" className="form-control" id="gradDate" value={gradDate}/>
                        <p className='text-danger text-center w-50 mx-auto p-2'>{errors.gradDate?.message}</p>
                    </div>
                    <div className="form-group pb-2">
                        <input onChange={(e) => setIsVeteran(e.target.checked)} type="checkbox" className=" me-2 form-check-input" id="isVeteran" checked={isVeteran}/>
                        <label className="form-check-label" htmlFor="isVeteran">Is {name} a veteran?</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReuseNinjaForm;
