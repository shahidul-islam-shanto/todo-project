import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './BodyDetail.css';

const bodyDetail = (props) => {
    const {title, discretion} = props.detail;
    const {id} = props;
    const remove = (id) =>{
        props.removeHeader(id)
    };
    return (
        <article className='body-container'>
            <div>
              <h1>{title}</h1>
              <p>{discretion}</p>
            </div>
            <div>
                <button className='btn-area' 
                onClick={()=> {remove(id)}}><DeleteIcon/></button>
            </div>
        </article>
    );
};

export default bodyDetail;