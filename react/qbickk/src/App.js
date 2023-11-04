import React, {useEffect} from 'react';
import {getAllUsers, getById} from "./services/axiosService";
import {UsersComponent} from "./components/users/UsersComponent";


const App = () => {

    const foobar = (info) => {
        console.log(info);

    }

    return (
        <div>
            <UsersComponent foobar={foobar}/>
        </div>
    );
};

export default App;