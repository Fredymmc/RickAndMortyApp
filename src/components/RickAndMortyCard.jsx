import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RickAndMortyCard = ({residentUrl}) => {

    const [residentu, setResidentu] =  useState({});

    
    useEffect( () => {            
        axios.get(residentUrl)
       .then(res => setResidentu(res.data));
       }, [] )

    console.log("ere");   
    console.log(residentu);

    return (
        <li className='col'  >
            <div className='rick_card' >
            
            <img src={residentu.image} alt="" />
            <h2> {residentu.name} </h2>
            <p> <span> Status: </span> <br /> {residentu.status} </p>
            <p> <span> Origin Name: </span> <br /> {residentu.origin?.name} </p>
            <p> <span> episodes Number: </span> <br /> {residentu.episode?.length} </p>
            <br /> <br />
            </div>
        </li>
    );
};

export default RickAndMortyCard;