import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const ThingDetails = (props) => {
    const [thing, setThing] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' +id)
            .then(response => setThing(res.data))
            .catch(error => console.error(error));
    }, []);
    
    return (
        <div>
            <p>First Name: {thing.firstName}</p>
            <p>Last Name: {thing.lastName}</p>
        </div>
    )
}
    
export default ThingDetails;