import React from 'react';
import {useLoaderData} from "react-router-dom";
import {Users} from "../components/UsersContainer/Users";

const UsersPage = () => {

    return (
        <div>
            <Users/>
        </div>
    );
};

export {UsersPage};