import React, { Children } from 'react'

export const ServiceChild = ({ img, title, text }) => {
    return (
        <div className='servicechild-conteiner'>
            <img {...img} alt='Security' />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
};
