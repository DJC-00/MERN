
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import ProductDetails from './views/ProductDetails';
import AllProducts from './views/AllProducts';
import NavBar from './components/NavBar';

function Home() {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
}

function App() {
  return (
    <div className='container'>
      <NavBar/>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element = {<Home/>}/>
            <Route exact path="/products" element = {<AllProducts/>}/>
            <Route exact path="/product/:id" element = {<ProductDetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
