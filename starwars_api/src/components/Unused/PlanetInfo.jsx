import React, { useState, useEffect } from 'react';
import axios from 'axios'

const PlanetInfo = (props) => {
    const [planet, setPlanet] = useState([])

    useEffect(()=>{
        axios.get('https://swapi.dev/api/planets/1')
            .then(response=>{setPlanet(response.data)})
    }, []); 

    return (  
        <div>
            {planet.name}
        </div>
    );
}
 
export default PlanetInfo