import React, { useState, useEffect } from 'react';
import AllNinjas from '../components/AllNinjas';
import NewNinjaForm from '../components/NewNinjaForm';

const NinjaMainPage = () => {

    const [newNinjaToggle, setNewNinjaToggle] = useState(false)

    return (
        <div>
            <div className='pb-5 container'>
                <NewNinjaForm newNinjaToggle={newNinjaToggle} setNewNinjaToggle={setNewNinjaToggle}/>
                <hr />
            </div>
            <AllNinjas newNinjaToggle={newNinjaToggle}/>
        </div>
    );
}

export default NinjaMainPage;
