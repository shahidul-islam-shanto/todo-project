import React, { useState } from 'react';
import './Header.css';
import Body from '../body/Body';
import InputArea from '../InputArea/InputArea';
import {v4 as uuidv4} from "uuid";

const Header = () => {
   const [header, setHeader] = useState([])

   const handleHeader = (header) => {
     setHeader((prevHeader)=> {
        return [...prevHeader, {id: uuidv4(), header}]
     });
   };
   const removeHeader = (id) =>{
     setHeader((prevHeader) =>{
        const filteredHeader = prevHeader.filter((data) => data.id !== id)
        return filteredHeader
     })
   }
    return (
        <div className='header-area'>
            <h1>To do app</h1>
            <InputArea changeHeader={handleHeader}/>
            <Body fakeData={header} removeHeader={removeHeader}/>
        </div>
    );
};

export default Header;