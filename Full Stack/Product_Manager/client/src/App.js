
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import ProductDetails from './views/ProductDetails';
import AllProducts from './views/AllProducts';
import NavBar from './components/NavBar';
import UpdateProduct from './views/UpdateProduct';

function Home() {
  return (
    <>
    <div className='columns is-centered'>
      <div className='column is-6 '>
        <h1 className='title is-1 has-text-centered mt-6 p-6 card'>Welcome</h1>
      </div>
    </div>
    <div className='columns is-centered'>
        <div className='column is-2 has-text-centered '>
          <a href='/products' className='button is-primary'>View All Products</a>
        </div>
        {/* <div className='column is-2 has-text-centered'>
          <a className='button is-primary'>Welcome</a>
        </div>
        <div className='column is-2 has-text-centered'>
          <a className='button is-primary'>Welcome</a>
        </div> */}

      </div>
      </>
  );
}

function App() {
  return (
    <div className='container'>
      <NavBar/>
      <hr/>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route exact path="/products" element = {<AllProducts/>}/>
            <Route exact path="/product/:id" element = {<ProductDetails/>}/>
            <Route exact path="/product/:id/edit" element = {<UpdateProduct/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
