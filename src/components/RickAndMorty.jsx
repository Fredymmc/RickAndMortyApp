import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RickAndMortyCard from './RickAndMortyCard';


const RickAndMorty = () => {

    const [rickType, setRickType] = useState([]);
    const [changeLocation, setChangeLocation] = useState("");
    


    useEffect( () => {    
        const ramdonLocation = Math.floor(Math.random() * 126) +1  ; 
        axios.get(`https://rickandmortyapi.com/api/location/${ramdonLocation}`)
       .then(res => setRickType(res.data));
       }, [ ] )

    const changeId = (() => {
        if( Number(changeLocation) < 160 ){
            axios.get(`https://rickandmortyapi.com/api/location/${changeLocation}`)
            .then(res => setRickType(res.data));
        } else { alert("el numero debe ser inferior a 160");

        }
        
    })   

    console.log(rickType);

    return (
        <div>

            <input type="text" className='input_desing' 
            placeholder='change Id number of Location'
            value={changeLocation}
            onChange={e => setChangeLocation(e.target.value)} />
            <button className='input_button' onClick={changeId} >change</button>
            <h1> {rickType.name} </h1>
            <div className="container_details">
            <p> <b> Type: </b> <br />  {rickType.type} </p>
            <p> <b> Dimension: </b> <br />  {rickType.dimension} </p>
            <p> <b> Population: </b> <br />  {rickType.residents?.length} </p>
            </div>
            <ul className='cardr' >
            
                {
                    rickType.residents?.map(rAMLocation => (                       
                        
                        <RickAndMortyCard 
                            residentUrl={rAMLocation}
                            key={rAMLocation}  /> 
                                             
                        ))
                }
            
            </ul>

        </div>
    );
};

export default RickAndMorty;