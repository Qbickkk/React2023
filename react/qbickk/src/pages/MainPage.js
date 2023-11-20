import React from 'react';
import {Link, Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            MainPage
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
                <li><Link to={'users'}>users</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export {MainPage};