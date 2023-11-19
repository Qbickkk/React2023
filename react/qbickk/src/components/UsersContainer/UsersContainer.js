import React, {useEffect, useState} from 'react';
import {Users} from "./Users/Users";
import {UserForm} from "./UserForm/UserForm";
import {usersService} from "../../services/usersService";

const UsersContainer = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(({data})=>setUsers(data));
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {UsersContainer};