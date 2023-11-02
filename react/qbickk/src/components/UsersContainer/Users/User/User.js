import React from 'react';

import css from './User.module.css';
import {userService} from "../../../../services/userService";

const User = ({user, click}) => {
    const {id, name, username} = user;


    return (
        <div className={css.User}>
            <p>{id}</p>
            <h3>{name}</h3>
            <h3>{username}</h3>
            <button onClick={()=>click(id)}>Details</button>
        </div>
    );
};

export {User};


