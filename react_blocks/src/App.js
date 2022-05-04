import React from 'react';
// import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Content from './components/Content';
import Advertisement from './components/Add';
 
                
function App() {
  return (
    <div className="app" style={{padding: '1em'}}>
        <Header />
        <div className="d-flex">
          <div className='w-25 pt-2 '>
            <Nav />
          </div>
          <div className='w-75 pl-2 pt-2'>
            <Main>
              <Content />
              <Content />
              <Content />
              <Advertisement />
            </Main>
            </div>
          </div>
    </div>
  );
}
                
export default App;

