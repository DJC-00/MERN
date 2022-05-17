import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import ProductDetails from './ProductDetails';
    
const UpdateProduct = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState();
    const [desc, setDesc] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(response => {
                setTitle(response.data.title);
                setPrice(response.data.price);
                setDesc(response.data.desc);
            })
    }, []);
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            desc
        })
            .then(response => console.log(response))
            .catch(error => console.error(error));
            console.log("test")
    }
    
    return (
        <><div className='container is-flex'>
            <div>
                <h1>Update a Product</h1>
                <form onSubmit={updateProduct}>
                    <p>
                        <label>First Name</label><br />
                        <input type="text"
                            name="title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value); } } />
                    </p>
                    <p>
                        <label>Last Name</label><br />
                        <input type="number"
                            name="price"
                            value={price}
                            onChange={(e) => { setPrice(e.target.value); } } />
                    </p>
                    <p>
                        <label>Last Name</label><br />
                        <input type="text"
                            name="desc"
                            value={desc}
                            onChange={(e) => { setDesc(e.target.value); } } />
                    </p>
                    <input type="submit" />
                </form>
            </div>

        </div><div>
                <ProductDetails />
            </div></>
    )
}
    
export default UpdateProduct;
