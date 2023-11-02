import React, {useEffect, useState} from 'react';

import css from './Users.module.css';
import {User} from "./User/User";
import {axiosService} from "../../../services/axiosService";
import {userService} from "../../../services/userService";


const Users = () => {

    const [users, setUsers] = useState([]);

    const click = (id) =>{
        console.log(id)
    }

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, []);

    return (
        <div className={css.Users}>
            {users.map(user=><User key={user.id} user={user} click={click}/>)}
        </div>
    );
};

export {Users};