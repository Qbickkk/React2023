import React from 'react';

const User = ({character}) => {
    const {id,name,status,species,gender,image} = character
    return (
        <div>
            <h2>{name}</h2>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <h4>{gender}</h4>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {User};