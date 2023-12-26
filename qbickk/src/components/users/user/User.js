import React from 'react';

const User = ({simpson}) => {
    const {name,surname,age,info,photo} = simpson
    return (
        <div>
            <h3>{name}</h3>
            <h3>{surname}</h3>
            <h4>{age}</h4>
            <p><i>{info}</i></p>
            <img src={photo} alt={name}/>
            <hr/>
        </div>
    );
};

export {User};