import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeAxios = (props) => {
    const [pokeList, setPokeList] = useState([]);

    // useEffect(()=>{
    //     axios.get('https://pokeapi.co/api/v2/pokemon/?limit=809')
    //         .then(response=>{setPokeList(response.data.results)})
    // }, []); 

    const getPokemon = (e) => {
        e.preventDefault();
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=809')
        .then(response=>{setPokeList(response.data.results)}); 

    }

    return (
        <div style={{padding:'0px 50px'}}>
            <button onClick={getPokemon}>Get Pokemon</button>
            {pokeList.length > 0 && pokeList.map((onePoke, index)=>{
                // console.log([pokeList[index]])
                return (
                    <div key={index}>
                        <h3>{index}</h3>
                        <li>
                            <ul>{onePoke.name}</ul>
                        </li>
                    </div>
                )
            }
        )}
        </div>
    );
     
};

export default PokeAxios