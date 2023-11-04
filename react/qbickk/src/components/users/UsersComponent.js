import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../services/axiosService";
import {UserComponent} from "./user/UserComponent";

const UsersComponent = ({chooseUser}) => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
    getAllUsers().then(value => setUsers(value.data));
    },[]);

    return (
        <div>
            {users.map(user=><UserComponent key={user.id} item={user} chooseUser={chooseUser}/>)}
        </div>
    );
};

export {UsersComponent};