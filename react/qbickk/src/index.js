import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {A} from "./components/A";


export let Context = createContext('default');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={'asdqwe'}>
      index component
    <A/>
  </Context.Provider>
);

