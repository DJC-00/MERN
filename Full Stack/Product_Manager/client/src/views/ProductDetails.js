import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {
    BrowserRouter,
    Switch,
    Route,
    Routes,
    Link,
    useNavigate
  } from "react-router-dom";
    
const ProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    let navigate = useNavigate();
    
    const deleteProduct = (productId) => {
        console.log("delete", productId)
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(response => {
                // removeFromDom(productId)
                navigate('/products',{ replace: true })
            })
            .catch(err => console.error(err));

    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div className="container pt-2">
            <div className='columns is-centered'>
                <div className='column is-one-third '>
                    <div className='card has-background-primary'>
                        <div className="card-content has-text-centered has-text-white">
                            <p className='title is-2 has-text-white'>{product.title}</p>
                            <p className='is-size-4'>Title: {product.title}</p>
                            <p className='is-size-4'>Price: ${product.price}.00</p>
                            <p className='mt-3'>Description: </p>
                            <p className='card mt-1 p-2'>{product.desc}</p>
                        </div>
                        <div className="card-footer">
                            <p className=' px-2 has-text-light '>ID: {product._id}</p>
                        </div>
                    </div>
                    <div  className='buttons mt-3 is-centered'>
                        <Link className='button is-success is-outlined' to={"/product/" + product._id + "/edit"}>
                            Edit
                        </Link>
                        <button onClick={(e) => {deleteProduct(product._id)}} className='button is-danger'>
                                Delete
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
    
export default ProductDetails;