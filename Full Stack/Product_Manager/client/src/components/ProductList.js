import React from 'react'
import axios from 'axios';
    
const ProductList = (props) => {
    return (
        <>
        <div className='columns is-multiline is-centered '>
            {props.products.map((product, i) => 
            <div key={product._id} className="card p-2 m-2 column is-3 has-background-primary has-text-white">
                <p className='is-size-3'>Title: {product.title}</p>

                {/* <p>Price: {product.price}</p>
                <p>Description: {product.desc}</p> */}

                <a href={"./product/" + product._id}>View Details</a>
            </div>
            )}
        </div>
        
        </>
    )
}
    
export default ProductList;