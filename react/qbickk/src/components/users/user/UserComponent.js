import React from 'react';

const UserComponent = ({item, chooseUser}) => {
    const {name,id,username} = item;
    return (
        <div>
            <h2>{name}</h2>
            <h2>{username}</h2>
            <div>{id}</div>
            <button onClick={()=>{
                chooseUser(item);
            }}>Details</button>
            <hr/>
        </div>
    );
};

export {UserComponent};