import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import store from "./store /store";
import {Users} from "./components/UsersContainer/Users";
import {Cars} from "./components/CarsContainer/Cars";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <Users/>
        <hr/>
        <Cars/>
  </Provider>
);

