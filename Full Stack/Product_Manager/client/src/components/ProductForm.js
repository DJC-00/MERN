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
        <div className='container  '>
            <h1 className='title is-0 has-text-centered'>Add a product!</h1>
            <div className='columns is-centered'>
                <div className='column is-one-third'>
                    <form onSubmit = {handleSubmit}>
                        <div className='field'>
                            <label className='label'>Title</label>
                            <div className='control'>
                                <input className="input is-primary" type="text" onChange={(e)=>setTitle(e.target.value)} price={title}/>
                            </div>
                        </div>
                        <div className='field'>
                            <label className='label'>Price</label>
                            <input className="input is-primary" type="number" onChange={(e)=>setPrice(e.target.value)} price={price}/>
                        </div>
                        <div className='field'>
                            <label className='label'>Description</label>
                            <input className="input is-primary" type="text" onChange={(e)=>setDesc(e.target.value)} price={desc}/>
                        </div>
                        <div className='control  has-text-centered'>
                            <input className='button has-background-primary-dark has-text-white is-link'  type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default ProductForm