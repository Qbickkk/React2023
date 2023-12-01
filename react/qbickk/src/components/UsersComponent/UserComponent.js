import React from 'react';
import {Link} from "react-router-dom";

const UserComponent = ({user}) => {
    const {id,name} = user;
    return (
        <div>
            <Link to={`${user.id}`}>{name} - {id}</Link>
        </div>
    );
};

export {UserComponent};