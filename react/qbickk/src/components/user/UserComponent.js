import React from 'react';

const UserComponent = ({user}) => {
    const {name,id,username,email,phone} = user
    return (
        <div>
            <hr/>
            <div>{id}</div>
            <h3>{name}</h3>
            <h3>{username}</h3>
            <h4>{email}</h4>
            <h4>{phone}</h4>
            <hr/>
        </div>
    );
};

export {UserComponent};