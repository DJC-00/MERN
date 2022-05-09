import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios'

const ItemInfo = (props) => {
    const [item, setItem] = useState([])
    const [url, setUrl] = useState("")
    const [error, setError] = useState("")
    const searchIndex = useParams();
    const category = useParams();

    useEffect(()=>{
        let newUrl = ('https://swapi.dev/api/' + category.category + '/' + searchIndex.searchIndex + '/')
        axios.get(newUrl)
            .then(response=>{setItem(response.data)})
            .catch(function(error){
                setItem(error.response.status)
                setError (error.response.status)

            })
    }, [url]); 
    
    return (  
        <div>
            {error == 404 ? 
                <div>
                    <h2>Error Code: {item}</h2>
                    <img src="https://i.kym-cdn.com/photos/images/facebook/001/005/935/ef1.jpg" alt="" />
                </div>
                : "" }
                <h1>{item.name}</h1>
                {Object.entries(item).map(([key, value]) => 
                <div key = {key}>
                    <p>{key}: {value}</p>
                </div>
                )}
            
        </div>
    );
}
 
export default ItemInfo