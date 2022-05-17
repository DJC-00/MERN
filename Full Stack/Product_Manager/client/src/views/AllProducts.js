import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
    
const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(response=>{
                setProducts(response.data);
                setLoaded(true);
            })
            .catch(error => console.error(error));
    },[products]);
    
    return (
        <div className='m-6'>
           <ProductForm/>
           <hr/>
           {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default AllProducts;