import React from 'react';
import BodyDetail from '../bodyDetail/BodyDetail';
import './Body.css';


const Body = (props) => {
    return (
        <section className='body-area'>
           { 
            props.fakeData.map((data) => (
            <BodyDetail 
            detail={data.header} key={data.id} id={data.id} 
            removeHeader={props.removeHeader}/>))
           }
        </section> 
    );
};

export default Body;