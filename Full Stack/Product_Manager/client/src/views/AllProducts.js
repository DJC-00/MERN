import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
    
const AllProducts = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(response=>{
                setProducts(response.data);
                setLoaded(true);
            })
            .catch(error => console.error(error));
    },[]);
    
    return (
        <div className='m-6'>
           <ProductForm/>
           <hr/>
           {loaded && <ProductList products={products}/>}
        </div>
    )
}
    
export default AllProducts;