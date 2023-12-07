import React, {createContext} from 'react';
import {A} from "./components/A";


const Context = createContext(null);
const App = () => {
    return (
        <Context.Provider value={'hello'}>
            <A/>
        </Context.Provider>
    );
};

export {App, Context};