import React, {useEffect} from 'react';
import axios from "axios";
import {getAllUsers, getById} from "./services/axiosService";


const App = () => {

    useEffect(() => {
        getAllUsers().then(value => console.log(value.data));
        getById(9).then(value => console.log(value));
    }, []);


    return (
        <div>
            App
        </div>
    );
};

export default App;