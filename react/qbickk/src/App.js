import React from 'react';
import {Users} from "./components/Users/Users";

const App = () => {
    return (
        <div>
            <Users/>
        </div>
    );
};

export default App;


// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів