import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import ReuseNinjaForm from '../../components/ReuseNinjaForm';
    
const Update = (props) => {
    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/person/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])
    const updateNinja = person => {
        axios.put('http://localhost:8000/api/ninja/' + id, person)
            .then(res => console.log(res));
    }
    
    return (
        <div>
            {loaded && (
                <ReuseNinjaForm
                onSubmitProp={updateNinja}
                initName={ninja.name}
                initProj={ninja.numProjects}
            />
            )}
        </div>
    )
}
    
export default Update;