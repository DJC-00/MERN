
import React, { useState } from 'react';

import axios from 'axios';
    
const ProductList = (props) => {
    const [message, setMessage] = useState("")

    const deleteProduct = (productId) => {
        console.log("delete", productId)
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(response => {
                props.removeFromDom(productId)
                setMessage(`Product ${productId} deleted`)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <>
        <p className=' has-text-centered m-5' >{message}</p>
        <div className='columns is-multiline is-centered '>
            {props.products.map((product, i) => 
            <div key={product._id} className="card p-2 m-2 column is-3 has-background-primary has-text-white">
                <p className='is-size-4'>Title: {product.title}</p>
                <p className='is-size-4'>${product.price}.00</p>
                
                <div className='mt-3 buttons is-centered are-small has-text-weight-bold is-justify-content-space-around'>
                    <a className='button is-white is-outlined' href={"./product/" + product._id}>View Details</a>
                    <button onClick={(e) => {deleteProduct(product._id)}} className='button is-danger'>
                        Delete
                    </button>
                </div>
            </div>
            )}
        </div>
        
        </>
    )
}
    
export default ProductList;