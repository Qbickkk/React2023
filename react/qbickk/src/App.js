import React, {useEffect, useState} from 'react';
import {getAllUsers, getById} from "./services/axiosService";
import {UsersComponent} from "./components/users/UsersComponent";


const App = () => {

   const [user, setUser] = useState(null);

    const chooseUser = (obj) => {
        setUser(obj)
        console.log(user);

    }

    return (
        <div>
            {/*<h2>{user?.email}</h2>*/}
            {user && <h2>{user.email}</h2>}
            <hr/>
            <hr/>
            <UsersComponent chooseUser={chooseUser}/>
        </div>
    );
};

export default App;