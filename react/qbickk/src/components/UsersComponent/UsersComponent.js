import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../services/usersService";
import {UserComponent} from "./UserComponent/UserComponent";

const UsersComponent = () => {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(value => setUsers(value));
    }, []);

    console.log(users);

    return (
        <div>
            {users?.map(user=><UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersComponent};