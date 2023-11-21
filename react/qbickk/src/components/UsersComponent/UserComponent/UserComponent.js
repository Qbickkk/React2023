import React from 'react';
import {Link} from "react-router-dom";

const UserComponent = ({user}) => {
    const {id,name}  = user;
    return (
        <div>
            {id} - <Link to={'details'} state={user}>{name}</Link>
        </div>
    );
};

export {UserComponent};