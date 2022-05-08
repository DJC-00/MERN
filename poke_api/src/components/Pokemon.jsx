import React, { useState, useEffect } from 'react';

const Pokemon = (props) => {
    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=809')
        .then(response => response.json())
        .then(response => setPokeList(response.results))
    }, []);

    return (
        <div style={{padding:'0px 50px'}}>
            {pokeList.length > 0 && pokeList.map((onePoke, index)=>{
                return (
                    <div key={index}>
                    <h3>{index}</h3>
                    <li>
                        <ul>{onePoke.name}</ul>
                    </li>
                    </div>
                )
            })}
        </div>
    );
     
};

export default Pokemon