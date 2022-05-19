import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import AuthorEdit from './components/AuthorEdit';
import FormAndList from './views/FormAndList';
import OneAuthor from './components/OneAuthor';



function App() {

  const [newAuthorToggle, setNewAuthorToggle] = useState(false)

  return (
    <Router>
      <div className="App">
        <div className='bg-primary mb-3'>
          <h1 className='text-primary text-center bg-primary text-white p-2'>authors</h1>
          <div className='text-center pb-3'>
            <Link to={`/`} type="button" className=" btn btn-outline-light mx-2 shadow">Home</Link>
            <Link to={`/authors/new`} type="button" className=" btn btn-outline-warning mx-2 shadow">Add Author</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <AuthorList newAuthorToggle={newAuthorToggle}/>
          </Route>
          <Route exact path="/authors/new">
            <AuthorForm newAuthorToggle={newAuthorToggle} setNewAuthorToggle={setNewAuthorToggle}/>
          </Route>
          <Route exact path="/authors/:_id">
            <OneAuthor/>
          </Route>
          <Route exact path="/authors/edit/:_id">
            <AuthorEdit/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
