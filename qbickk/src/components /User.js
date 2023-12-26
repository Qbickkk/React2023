import React from 'react';

const User = (props) => {

    const {user} = props
    console.log(props)

    return (
        <div>
            <p>{user.id}</p>
            <h1>{user.name}</h1>
            <hr/>
        </div>
    );
};

export {User};