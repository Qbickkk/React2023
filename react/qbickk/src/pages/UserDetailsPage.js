import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetailsPage = () => {
    const {state} = useLocation();
    console.log(state)
    return (
        <div>
            {state.name} - {state.email}
        </div>
    );
};

export {UserDetailsPage};