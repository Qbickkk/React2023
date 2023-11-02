import React, {useEffect,useState} from 'react';
import {fetchService} from "../../services/fetchService";
import {UserComponent} from "../user/UserComponent";

const UsersComponent = () => {

    const [users,setUsers] = useState([]);


    useEffect(() => {
        fetchService().then(value=>setUsers(value))
    }, []);

    console.log(users);

    return (
        <div>
            {users.map(user=><UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersComponent};