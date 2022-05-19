import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AllNinjas from '../AllNinjas';
import NewNinjaForm from '../../components/NewNinjaForm';
export default () => {
    const [ninjas, setNinjas] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/ninjas')
            .then(res =>{ 
                setNinjas(res.data)
                setLoaded(true);
            });
    }, [])
    const removeFromDom = ninjaId => {
        setNinjas(ninjas.filter(ninja => ninja._id != ninjaId));
    }
    const createNinja = ninja => {
        axios.post('http://localhost:8000/api/ninjas', ninja)
            .then(res=>{
                setNinjas([...ninjas, res.data]);
            })
    }
    return (
        <div>
           <NewNinjaForm onSubmitProp={createNinja} initialFirstName="" initialLastName=""/>
           <hr/>
           {loaded && <AllNinjas ninjas={ninjas} removeFromDom={removeFromDom}/>}
        </div>
    )
}

