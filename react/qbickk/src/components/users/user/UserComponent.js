import React from 'react';

const UserComponent = ({item, foobar}) => {
    const {name,id,username} = item;
    return (
        <div>
            <h2>{name}</h2>
            <h2>{username}</h2>
            <div>{id}</div>
            <button onClick={()=>{
                foobar('test');
            }}>Details</button>
            <hr/>
        </div>
    );
};

export {UserComponent};