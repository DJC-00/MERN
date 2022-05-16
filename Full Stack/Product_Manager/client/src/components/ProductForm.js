import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(title,price,desc)
        // setDesc(["test"])
        // setMyRandom(false)
        axios.post("http://localhost:8000/api/newProduct",{
            title,
            price,
            desc
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
        <form onSubmit = {handleSubmit}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} price={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} price={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDesc(e.target.value)} price={desc}/>
            </p>

            <input type="submit"/>
        </form>
    )

}

export default ProductForm