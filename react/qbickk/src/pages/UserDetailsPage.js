import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {UserDetails} from "../components/UsersContainer/UserDetails";
import {usersService} from "../services";

const UserDetailsPage = () => {

    const {userId} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state){
            setUser(state.user)
        }else{
        usersService.getById(userId).then(({data})=>setUser(data))
        }
    }, [userId]);

    return (
        <div>
            { user && <UserDetails user={user}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};