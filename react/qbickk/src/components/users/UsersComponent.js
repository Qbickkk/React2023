import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../services/axiosService";
import {UserComponent} from "./user/UserComponent";

const UsersComponent = ({foobar}) => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
    getAllUsers().then(value => setUsers(value.data));
    },[]);

    return (
        <div>
            {users.map(user=><UserComponent key={user.id} item={user} foobar={foobar}/>)}
        </div>
    );
};

export {UsersComponent};