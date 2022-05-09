import React, { useState, useParams } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import PersonInfo from './components/PersonInfo';
import Selection from './components/Selection';

const Home = (props) => {
  return (
    <h2>Select an option and input a number to recieve starwars data!</h2>
  );
}

// const App = (props) => {
function App(props) {
  let history = useHistory();
  const [category, setCategory] = useState('')
  const [searchIndex, setSearchIndex] = useState('')

  return (
    <div className="App">
      <div style={{padding:'10px'}}>
        <BrowserRouter>
          <h1>Star Wars!</h1>
          <Route path="/">
            {Home}
          </Route>
          <Selection/>
          <Switch>
            <Route path="/info/:category/:searchIndex" component={PersonInfo}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
