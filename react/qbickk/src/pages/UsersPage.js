import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";
import {UsersComponent} from "../components/UsersComponent/UsersComponent";

const UsersPage = () => {
    const loaderData = useLoaderData();
    return (
        <div>
            <UsersComponent users={loaderData}/>
            <hr/>
            <hr/>
            <Outlet/>
            <hr/>
            <hr/>
        </div>
    );
};

export {UsersPage};