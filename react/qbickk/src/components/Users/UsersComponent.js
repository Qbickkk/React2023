import React, {useEffect, useState} from 'react';

import css from './Users.module.css';
import {UserComponent} from "./User/UserComponent";
import {userService} from "../../services/userService";
import {UserDetails} from "./User/UserDetails";

const UsersComponent = () => {

    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);


    const click = async (userId) => {
       const {data} =  await userService.getUserById(userId);
        console.log(data);
        setUserDetails(data);
    }


    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data));
    }, []);
    return (
        <div>
            <div className={css.Users}>
                {users.map(user =>  <UserComponent key={user.id} user={user} click={click}/>)}
            </div>
            <div>
                {/*{userDetails ? <UserDetails userDetails={userDetails}/> : <h3>Not Selected</h3>}*/}
                {userDetails && <UserDetails userDetails={userDetails}/>}
            </div>
        </div>
    );
};

export {UsersComponent};