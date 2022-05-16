import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const ProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div className="container pt-2">
            <div className='columns is-centered'>
                <div className='column is-one-quarter '>
                    <div className='card has-background-primary'>
                        <div className="card-content has-text-centered has-text-white">
                            <p className='title is-2 has-text-white'>{product.title}</p>
                            <p>Title: {product.title}</p>
                            <p>Price: {product.price}</p>
                            <p>Description: {product.desc}</p>
                        </div>
                        <div className="card-footer">
                            <p className=' px-2 has-text-light '>ID: {product._id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default ProductDetails;