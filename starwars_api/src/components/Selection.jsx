import React, { useState, useParams } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

const Selection = (props) => {
  let history = useHistory();
  const [category, setCategory] = useState(localStorage.getItem('selection'))
  const [searchIndex, setSearchIndex] = useState(localStorage.getItem('index'))

  const handleForm = (e) => {
    localStorage.setItem('selection', category)
    localStorage.setItem('index', searchIndex)
    history.push(`/info/${category}/${searchIndex}/`)
    history.goForward();
  }

  return (
  <form onSubmit={handleForm}>
    <label>
      <select name="category" id="starForm" onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="people">Person</option>
        <option value="planets">Planet</option>
        <option value="starships">Starships</option>
      </select>
    </label>
    <input type="number" value={searchIndex} onChange={(e) => setSearchIndex(e.target.value)}/>
    <br/>
    <input type="submit" value="Submit" Link to=":category/:searchIndex/" />
  </form>

  );
}
export default Selection