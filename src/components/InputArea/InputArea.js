import React, { useState } from 'react';
import'./InputArea.css';

const InputArea = (props) => {
    const [input, setInput] = useState({title: "", discretion: ""})
    const {title, discretion} = input

    const handleChange = (event) => {
        const name = event.target.name;
        setInput((oldInput) => {
            return {...oldInput, [name]: event.target.value}
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.changeHeader(input);
        setInput({title: "", discretion: ""})
    }
    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='form-area'>
                <label htmlFor="title">Title: </label>
                <input 
                type="text" 
                id='title' 
                name='title' 
                value={title} 
                onChange={handleChange}/>
            </div>
            <div className='form-area'>
                <label htmlFor="discretion">Discretion: </label>
                <textarea 
                type="text" 
                id='discretion' 
                name='discretion' 
                value={discretion} 
                onChange={handleChange}/>
            </div>
            <button className='form-btn'>Add now</button> 
        </form>
    );
};

export default InputArea;