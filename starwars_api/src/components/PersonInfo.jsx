import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios'

const PersonInfo = (props) => {
    const [person, setPerson] = useState([])
    const [url, setUrl] = useState("")
    const searchIndex = useParams();
    const category = useParams();

    useEffect(()=>{
        let newUrl = ('https://swapi.dev/api/' + category.category + '/' + searchIndex.searchIndex)
        console.log(newUrl)
        setUrl(newUrl)
        axios.get(url)
            .then(response=>{setPerson(response.data)})
    }, [url]); 

    console.log(searchIndex.searchIndex)
    console.log(category.category)
    return (  
        <div>
            <h1>{person.name}</h1>
            {Object.entries(person).map(([key, value]) => 
            <div key = {key}>
                <p>{key}: {value}</p>
            </div>
            )}
        </div>
    );
}
 
export default PersonInfo