import React from 'react';

const User = ({user}) => {

    const {id, name, username, phone} = user

    return (
        <div>
            <h2>{name}</h2>
            <p>{id}</p>
            <h3>{username}</h3>
            <h3>{phone}</h3>
            <hr/>
        </div>
    );
};

export {User};