import React, { useState, useEffect } from 'react';
import axios from 'axios'

const StarshipInfo = (props) => {
    const [starship, setStarship] = useState([])

    useEffect(()=>{
        axios.get('https://swapi.dev/api/starships/9/')
            .then(response=>{setStarship(response.data)})
    }, []); 

    return (  
        <div>
            {starship.name}
        </div>
    );
}
 
export default StarshipInfo