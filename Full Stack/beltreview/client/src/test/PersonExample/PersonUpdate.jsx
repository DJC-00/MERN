import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import ReuseNinjaForm from '../components/ReuseNinjaForm';
    
const { id } = props;
const [person, setPerson] = useState();
const [loaded, setLoaded] = useState(false);

const Update = (props) => {

    useEffect(() => {
        axios.get('http://localhost:8000/api/person/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/person/' + id, person)
            .then(res => console.log(res));
    }

    //In our return
    return(
    <div>
        {loaded && (
            <PersonForm
                onSubmitProp={updatePerson}
                initialFirstName={person.firstName}
                initialLastName={person.lastName}
            />
        )}
    </div>
    )
}