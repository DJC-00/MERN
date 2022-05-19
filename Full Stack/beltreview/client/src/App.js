import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import AllNinjas from './components/AllNinjas';
import NewNinjaForm from './components/NewNinjaForm';
import OneNinja from './components/OneNinja';
import EditNinjaForm from './components/EditNinjaForm';
import EditNinjaRob from './components/EditNinjaRob';
import NinjaMainPage from './views/NinjaMainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='bg-primary'>
          <h1 className='text-primary text-center bg-primary text-white p-2'>Ninjas</h1>
          <div className='text-center pb-3'>
            <Link to={`/`} type="button" className=" btn btn-outline-light btn-">Home</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <NinjaMainPage/>
          </Route>
          <Route exact path="/ninjas/:_id">
            <OneNinja/>
          </Route>
          <Route exact path="/ninjas/edit/:_id">
            <EditNinjaForm/>
          </Route>
          {/* <Route exact path="/test">
            <NinjaMain/>
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
